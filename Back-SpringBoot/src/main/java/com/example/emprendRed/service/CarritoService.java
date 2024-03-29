package com.example.emprendRed.service;

import java.util.List;
import java.util.Optional;

import com.example.emprendRed.model.DTO.CarritoDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.emprendRed.model.Carrito;

public interface CarritoService {
 
	public Iterable<Carrito> findAll();
	
	public Page<Carrito> findAll(Pageable pageable);
	
	public Optional<Carrito> findById(Long id);
	
	public Carrito save(Carrito producto);
	
	public void deleteById(Long id);
	
	List<Carrito> searchNativo(Long filtro) throws Exception;

	void addProducto(Long productoId) throws Exception;
		
	void deleteProductoToCarrito (List<Long> productoIds ) throws Exception;

	CarritoDTO getCarritoByContext () throws Exception;
}
