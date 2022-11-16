package com.example.emprendRed.repository;


import org.springframework.data.domain.Page;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.emprendRed.model.Productos;

import java.util.HashMap;

@Repository
public interface ProductosRepositorio extends JpaRepository<Productos, Long> {

 Page<Productos> findAllWithFilters(HashMap<String,Object>map);

	 @Query(value= "SELECT * FROM productos WHERE productos.vendedor_id = ?1" ,
			  nativeQuery=true)
	 List<Productos> searchNativo(@Param("filtro")String filtro);

	 @Query(value = "SELECT * FROM productos WHERE id IN (:ids) ; " , nativeQuery = true)
	List<Productos> getAllByIds (@Param("ids") List<Long> ids);

	@Query (value = "SELECT DISTINCT p.* FROM productos p " +
			"INNER JOIN carritos_productos  ON carritos_productos.producto_id = p.id " +
			" WHERE carritos_productos.carrito_id = :carritoId ;  "
			, nativeQuery = true)
	List<Productos> getProductosByCarrito(@Param("carritoId") Long carritoId);
}
