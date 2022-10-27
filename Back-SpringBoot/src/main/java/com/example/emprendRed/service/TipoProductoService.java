package com.example.emprendRed.service;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.emprendRed.model.TipoProducto;

public interface TipoProductoService {
	
public Iterable<TipoProducto> findAll();
	
	public Page<TipoProducto> findAll(Pageable pageable);
	
	public Optional<TipoProducto> findById(Long id);
	
	public TipoProducto save(TipoProducto producto);
	
	public void deleteById(Long id);
}

