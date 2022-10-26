package com.example.emprendRed.service;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.emprendRed.model.Carrito;

public interface CarritoService {
 
	public Iterable<Carrito> findAll();
	
	public Page<Carrito> findAll(Pageable pageable);
	
	public Optional<Carrito> findById(Long id);
	
	public Carrito save(Carrito producto);
	
	public void deleteById(Long id);
	
 
}
