package com.example.emprendRed.repository;

import com.example.emprendRed.Enum.DIRECTION;
import com.example.emprendRed.Enum.ROLE;
import com.example.emprendRed.model.Venta;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.*;

public class VentaRepositorioImpl {

    @PersistenceContext
    private EntityManager entityManager;

    public Page<Venta> getAllByFilters (HashMap<String,Object> filters) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Venta> query = cb.createQuery(Venta.class);
        Root<Venta> root = query.from(Venta.class);
        List<Predicate> predicates = new ArrayList<>();

        if (filters.get("role").equals(ROLE.USUARIO.toString())){
            predicates.add(cb.equal(root.get("comprador").get("id"),filters.get("personId")));
        }
        if (filters.get("role").equals(ROLE.VENDEDOR.toString())){
            predicates.add(cb.equal(root.get("vendedor").get("id"),filters.get("personId")));
        }

        for (Map.Entry<String, Object> entry : filters.entrySet()){
            switch (entry.getKey()){
                case "dateTo":
                    predicates.add(cb.greaterThanOrEqualTo(root.get("fechaDeCreacion"),(Date)entry.getValue()));
                    break;
                case "dateFrom":
                    predicates.add(cb.lessThanOrEqualTo(root.get("fechaDeCreacion"),(Date)entry.getValue()));
                    break;
                case "estado":
                case "tipoDePago":
                    predicates.add(cb.equal(root.get(entry.getKey()),entry.getValue()));
            }
        }

       query.select(root).where(predicates.toArray(new Predicate[0]));

        if (filters.containsKey("dir") && filters.get("dir").equals(DIRECTION.ASC)) {
            query.orderBy(cb.asc(root.get(filters.get("orderBy").toString().toLowerCase())));
        }
        if (filters.containsKey("dir") && filters.get("dir").equals(DIRECTION.DESC)) {
            query.orderBy(cb.desc(root.get(filters.get("orderBy").toString().toLowerCase())));
        }
        TypedQuery<Venta> query1 = entityManager.createQuery(query);
        Long total = getCountCategories(filters);
        if (filters.containsKey("pageOffset") && filters.containsKey("pageSize")) {
            query1.setFirstResult((Integer) filters.get("pageOffset"));
            query1.setMaxResults((Integer) filters.get("pageSize"));
        }
        return new PageImpl<>(query1.getResultList(), Pageable.unpaged(),total);
    }

    public Long getCountCategories (HashMap<String, Object> filters) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Long> query = cb.createQuery(Long.class);
        Root<Venta> root = query.from(Venta.class);
        List<Predicate> predicates = new ArrayList<>();
        if (filters.get("role").equals(ROLE.USUARIO.toString())){
            predicates.add(cb.equal(root.get("comprador").get("id"),filters.get("personId")));
        }
        if (filters.get("role").equals(ROLE.VENDEDOR.toString())){
            predicates.add(cb.equal(root.get("vendedor").get("id"),filters.get("personId")));
        }

        for (Map.Entry<String, Object> entry : filters.entrySet()){
            switch (entry.getKey()){
                case "dateFrom":
                    predicates.add(cb.greaterThanOrEqualTo(root.get("fechaDeCreacion"),(Date)entry.getValue()));
                    break;
                case "dateTo":
                    predicates.add(cb.lessThanOrEqualTo(root.get("fechaDeCreacion"),(Date)entry.getValue()));
                    break;
                case "estado":
                case "tipoDePago":
                    predicates.add(cb.equal(root.get(entry.getKey()),entry.getValue()));
            }
        }

        query.select(cb.countDistinct(root)).where(predicates.toArray(new Predicate[0]));
        return entityManager.createQuery(query).getSingleResult();
    }

}
