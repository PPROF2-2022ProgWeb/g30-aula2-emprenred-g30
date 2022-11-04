package com.example.emprendRed.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.emprendRed.model.Productos;
import com.example.emprendRed.repository.ProductosRepositorio;

@Service
public class ProductosServiceimpl implements ProductosService{
	@Autowired
	private ProductosRepositorio productoRepositorio;
	@Override
	@Transactional(readOnly=true)
	
	
	public Iterable<Productos> findAll() {
		return productoRepositorio.findAll();
	}

	@Override
	@Transactional(readOnly=true)

	public Page<Productos> findAll(Pageable pageable) {
		return productoRepositorio.findAll(pageable);
	}

	@Override
	@Transactional(readOnly=true)

	public Optional<Productos> findById(Long id) {
		return productoRepositorio.findById(id);
	}

	@Override
	@Transactional
	public Productos save(Productos producto) {
		return productoRepositorio.save(producto);
	}

	@Override
	@Transactional
	public void deleteById(Long id) {
		productoRepositorio.deleteById(id);
	}

}
