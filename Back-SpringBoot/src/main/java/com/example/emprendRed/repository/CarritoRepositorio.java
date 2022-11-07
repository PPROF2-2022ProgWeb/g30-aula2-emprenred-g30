package com.example.emprendRed.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.emprendRed.model.Carrito;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface CarritoRepositorio extends JpaRepository<Carrito, Long> {
	/*
	List<Carrito> FindById_usuarioContaining(@Param("filtro")String nombre);
	nativo */
	 @Query(value= "SELECT * FROM carrito WHERE carrito.persona_id = :filtro" ,
			  nativeQuery=true)
	 List<Carrito> searchByPerson(@Param("filtro")Long  filtro);
	 /*
	@Query (//de jpa
			value = "SELECT * FROM carrito WHERE carrito.id_usuario = %:filtro%")
	List<Carrito> search(@Param ("filtro")String filtro);*/


	@Query (value = "SELECT SUM(p.precio) FROM productos p INNER JOIN carritos_productos cp ON cp.producto_id = p.id " +
			" WHERE cp.carrito_id = (SELECT c.id FROM carrito c WHERE c.persona_id = :personaId ) " , nativeQuery = true)
	Optional<Double> getPrecioByPersona(@Param("personaId") Long personaId);


	@Transactional
	@Modifying
	@Query (value = "DELETE FROM carritos_productos WHERE carrito_id = :carritoId AND producto_id IN (:productoIds) " , nativeQuery = true)
	void deleteProducts(@Param("carritoId") Long carritoId, @Param("productoIds") List<Long> productosId);


}
