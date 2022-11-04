package com.example.emprendRed.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.emprendRed.model.Carrito;
import com.example.emprendRed.repository.CarritoRepositorio;

@Service
public class CarritoServiceimpl implements CarritoService {

	@Autowired
	private CarritoRepositorio carritoRepositorio;
	
	@Override
	@Transactional(readOnly=true)
	
	public Iterable<Carrito> findAll() {
		return carritoRepositorio.findAll();
	}

	@Override
	@Transactional(readOnly=true)
	public Page<Carrito> findAll(Pageable pageable) {
		return carritoRepositorio.findAll(pageable);
	}

	@Override
	@Transactional(readOnly=true)
	public Optional<Carrito> findById(Long id) {
		return carritoRepositorio.findById(id);
	}

	@Override
	@Transactional
	public Carrito save(Carrito producto) {
		return carritoRepositorio.save(producto);
	}

	@Override
	@Transactional
	public void deleteById(Long id) {
		carritoRepositorio.deleteById(id);
	}

}
