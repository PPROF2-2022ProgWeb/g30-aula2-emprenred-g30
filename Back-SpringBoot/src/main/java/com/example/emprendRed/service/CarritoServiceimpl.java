package com.example.emprendRed.service;

import java.util.List;
import java.util.Optional;


import com.example.emprendRed.Jwt.exceptions.BadRequestException;
import com.example.emprendRed.model.DTO.CarritoDTO;
import com.example.emprendRed.model.DTO.ProductoResponseDTO;
import com.example.emprendRed.model.Persona;
import com.example.emprendRed.model.Productos;
import com.example.emprendRed.repository.ProductosRepositorio;
import com.example.emprendRed.utils.Utils;
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

	@Autowired
	private Utils utils;

	@Autowired
	private ProductosService productosService;

	@Autowired
	private ProductosRepositorio productosRepositorio;
	
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
	@Override
	public List<Carrito> searchNativo(Long filtro) throws Exception {
		try {
			List<Carrito> carritos = carritoRepositorio.searchByPerson(filtro);
		return carritos;
		}catch (Exception e) {
			throw new Exception(e.getMessage());
		}
		
	}

	@Override
	@Transactional
	public void addProducto(Long productoId) throws Exception {
		Persona persona = utils.getPersonContext();
		Carrito carrito = searchNativo(persona.getId()).size()==0? null:searchNativo(persona.getId()).get(0);
		Productos producto =  productosService.findById(productoId).orElseThrow(()-> new BadRequestException("producto invalido"));
		if (carrito== null){
			carrito = new Carrito();
			carrito.setPersona(persona);
		}

		if (carrito.getProductos().size()>0
				&& producto.getVendedor().getId()!= carrito.getProductos().get(0).getVendedor().getId() ){
			throw new BadRequestException("Producto de vendedor diferente. ");
		}

		carrito.getProductos().add(producto);

		carritoRepositorio.save(carrito);
		updatePrecioCarrito(persona.getId());
	}

	@Override
	@Transactional
	public void deleteProductoToCarrito(List<Long> productoIds) throws Exception {
		Persona persona = utils.getPersonContext();
		Carrito carrito = searchNativo(persona.getId()).size()==0? null:searchNativo(persona.getId()).get(0);

		for (Long id: productoIds ) {
			carrito.getProductos().remove(productosRepositorio.getById(id));
		}
		carritoRepositorio.save(carrito);
		updatePrecioCarrito(persona.getId());


	}

	@Override
	public CarritoDTO getCarritoByContext() throws Exception {
		Persona persona = utils.getPersonContext();
		Carrito carrito = searchNativo(persona.getId()).size()>0 ? searchNativo(persona.getId()).get(0): null;

		if (carrito == null) {
			return new CarritoDTO();
		}

		List<Productos> productos = productosRepositorio.getProductosByCarrito(carrito.getId());
		CarritoDTO carritoResponse = new CarritoDTO();
		carritoResponse.setId(carrito.getId());
		carritoResponse.setPrecio(carritoResponse.getPrecio());

		for (Productos producto : productos ) {
			ProductoResponseDTO productoResponseDTO = new ProductoResponseDTO();
			productoResponseDTO.setProducto(producto);
			productoResponseDTO.setCantidad(carritoRepositorio.countProducts(carrito.getId(), producto.getId()).intValue());

			carritoResponse.getProductos().add(productoResponseDTO);

		}

		return carritoResponse;
	}

	private void updatePrecioCarrito (Long personaId) throws Exception {
		Double precioCarrito = carritoRepositorio.getPrecioByPersona(personaId).orElse(0.0);

		Carrito carrito = searchNativo(personaId).get(0);

		carrito.setPrecio(precioCarrito);
		carritoRepositorio.save(carrito);
	}

}


