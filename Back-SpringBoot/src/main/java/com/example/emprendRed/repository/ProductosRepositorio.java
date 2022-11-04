package com.example.emprendRed.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.emprendRed.model.Carrito;
import com.example.emprendRed.model.Productos;

@Repository
public interface ProductosRepositorio extends JpaRepository<Productos, Long> {
	 @Query(value= "SELECT * FROM productos WHERE productos.id_usuario = ?1" ,
			  nativeQuery=true)
	 List<Productos> searchNativo(@Param("filtro")String filtro);
}
