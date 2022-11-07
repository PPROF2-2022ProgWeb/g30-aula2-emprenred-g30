package com.example.emprendRed.repository;

import com.example.emprendRed.Enum.DIRECTION;
import com.example.emprendRed.Enum.FILTERS;
import com.example.emprendRed.model.Productos;
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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProductosRepositorioImpl {

    @PersistenceContext
    private EntityManager entityManager;

    public Page<Productos> findAllWithFilters(HashMap<String,Object> map) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Productos> query = cb.createQuery(Productos.class);
        Root<Productos> root = query.from(Productos.class);
        List<Predicate> predicates = new ArrayList<>();

        if (map.containsKey("available") && (Boolean) map.get("available")){
            predicates.add(cb.greaterThanOrEqualTo(root.get("stock"),1));
        }
        if (map.containsKey("filters")) {
            switch ((FILTERS)map.get("filters")) {
                case DESCRIPCION:
                    predicates.add(cb.like(cb.upper(root.get("nombre")), "%" + map.get("value").toString().toUpperCase() + "%"));
                    break;
                case CATEGORIA:
                    predicates.add(cb.equal(root.get("tipoProducto").get("id_TipoProducto"),map.get("value")));
                case VENDEDOR:
                    predicates.add(cb.equal(root.get("vendedor").get("id"),map.get("value")));
            }

        }


        query.select(root).where(predicates.toArray(new Predicate[0]));

        if (map.containsKey("dir") && map.get("dir").equals(DIRECTION.ASC)) {
            query.orderBy(cb.asc(root.get(map.get("orderBy").toString().toLowerCase())));
        }
        if (map.containsKey("dir") && map.get("dir").equals(DIRECTION.DESC)) {
            query.orderBy(cb.desc(root.get(map.get("orderBy").toString().toLowerCase())));
        }
        TypedQuery<Productos> query1 = entityManager.createQuery(query);
        Long total = getCountCategories(map);
        if (map.containsKey("pageOffset") && map.containsKey("pageSize")) {
            query1.setFirstResult((Integer) map.get("pageOffset"));
            query1.setMaxResults((Integer) map.get("pageSize"));
        }
        return new PageImpl<>(query1.getResultList(), Pageable.unpaged(),total);
    }

    public Long getCountCategories (HashMap<String, Object> map) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Long> query = cb.createQuery(Long.class);
        Root<Productos> root = query.from(Productos.class);
        List<Predicate> predicates = new ArrayList<>();
        if (map.containsKey("available") && (Boolean) map.get("available")){
            predicates.add(cb.greaterThanOrEqualTo(root.get("stock"),1));
        }

        if (map.containsKey("filters")) {
            switch ((FILTERS)map.get("filters")) {
                case DESCRIPCION:
                    predicates.add(cb.like(cb.upper(root.get("nombre")), "%" + map.get("value").toString().toUpperCase() + "%"));
                    break;
                case CATEGORIA:
                    predicates.add(cb.equal(root.get("tipoProducto").get("id_TipoProducto"),map.get("value")));
                case VENDEDOR:
                    predicates.add(cb.equal(root.get("vendedor").get("id"),map.get("value")));
            }

        }
        query.select(cb.countDistinct(root)).where(predicates.toArray(new Predicate[0]));
        return entityManager.createQuery(query).getSingleResult();
    }


}

