package com.example.emprendRed.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.emprendRed.model.Carrito;
import com.example.emprendRed.model.Productos;

public interface ProductosService {
 
	public Iterable<Productos> findAll();
	
	public Page<Productos> findAll(Pageable pageable);
	
	public Optional<Productos> findById(Long id);
	
	public Productos save(Productos producto);
	
	public void deleteById(Long id);
	
	List<Productos> searchNativo(String filtro) throws Exception;
 
}
