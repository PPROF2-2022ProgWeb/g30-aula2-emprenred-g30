package com.example.emprendRed.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.emprendRed.model.Carrito;

@Repository
public interface CarritoRepositorio extends JpaRepository<Carrito, Long> {
	/*
	List<Carrito> FindById_usuarioContaining(@Param("filtro")String nombre);
	nativo */
	 @Query(value= "SELECT * FROM carrito WHERE carrito.id_usuario = ?1" ,
			  nativeQuery=true)
	 List<Carrito> searchNativo(@Param("filtro")String filtro);
	 /*
	@Query (//de jpa
			value = "SELECT * FROM carrito WHERE carrito.id_usuario = %:filtro%")
	List<Carrito> search(@Param ("filtro")String filtro);*/
	 
}
