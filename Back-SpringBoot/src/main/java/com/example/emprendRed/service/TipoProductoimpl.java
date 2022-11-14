package com.example.emprendRed.service;

import java.util.Optional;

import com.example.emprendRed.exceptions.BadRequestException;
import javassist.tools.web.BadHttpRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.emprendRed.model.TipoProducto;
import com.example.emprendRed.repository.TipoProductoRepositorio;

import javax.swing.text.BadLocationException;

@Service
public class TipoProductoimpl implements TipoProductoService{
	
	@Autowired
	private TipoProductoRepositorio tipoProductoRepositorio; 
	@Override
	@Transactional(readOnly=true)
	public Iterable<TipoProducto> findAll() {
		return tipoProductoRepositorio.findAll();
	}

	@Override
	@Transactional(readOnly=true)
	public Page<TipoProducto> findAll(Pageable pageable) {
		return tipoProductoRepositorio.findAll(pageable);
	}

	@Override
	@Transactional(readOnly=true)
	public Optional<TipoProducto> findById(Long id) {
		return tipoProductoRepositorio.findById(id);
	}

	@Override
	@Transactional
	public TipoProducto save(TipoProducto producto) {
		Boolean isValid = tipoProductoRepositorio.existsByDescripcion(producto.getDescripcion());
		if (isValid){
			throw new BadRequestException("Ya existe nombre de la categoria");
		}

		return tipoProductoRepositorio.save(producto);
	}
	@Override
	@Transactional
	public TipoProducto update(TipoProducto producto) {
		//	Boolean isValid = tipoProductoRepositorio.existsByDescripcion(producto.getDescripcion());
		//	if (isValid){
		//		throw new BadRequestException("Ya existe nombre de la categoria");
		//	}

		return tipoProductoRepositorio.save(producto);
	}

	@Override
	@Transactional
	public void deleteById(Long id) {
		tipoProductoRepositorio.deleteById(id);
	}

}
