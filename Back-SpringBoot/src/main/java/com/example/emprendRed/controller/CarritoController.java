package com.example.emprendRed.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.emprendRed.model.Carrito;
import com.example.emprendRed.model.Productos;
import com.example.emprendRed.service.CarritoService;
import com.example.emprendRed.service.ProductosService;

@RestController
@RequestMapping("/api/carrito")
public class CarritoController {
	@Autowired
	private CarritoService carritoService;
	
	//Crear 
		@PostMapping
		public ResponseEntity<?> create(@RequestBody Carrito carrito){
			return ResponseEntity.status(HttpStatus.CREATED).body(carritoService.save(carrito));
		}
		//Leer 
		@GetMapping("/{id}")
		public ResponseEntity<?> read(@PathVariable(value = "id") Long id){
			Optional<Carrito> oCarrito = carritoService.findById(id);
			if(!oCarrito .isPresent()){
				return ResponseEntity.notFound().build();
			}
			return ResponseEntity.ok(oCarrito);
				}
		
		//Actualizar
		@PutMapping("/{id}")
		public ResponseEntity<?> update (@RequestBody Carrito CarritoDetails, @PathVariable(value="id") Long id){
			Optional<Carrito> carrito = carritoService.findById(id);
			if(!carrito.isPresent()) {
				return ResponseEntity.notFound().build();
			}
			//Otromodo BeanUtils.copyProperties(ProductosDetails, productos.get());
			carrito.get().setId_usuario(CarritoDetails.getId_usuario());
			carrito.get().setId_producto(CarritoDetails.getId_producto());
			carrito.get().setPrecio(CarritoDetails.getPrecio());
			
		
			return ResponseEntity.status(HttpStatus.CREATED).body(carritoService.save(carrito.get()));
		} 
		//Borrar
		@DeleteMapping("/{id}")
		public ResponseEntity <?> delete (@PathVariable(value="id")Long id){
		
			if(!carritoService.findById(id).isPresent())	{
			return ResponseEntity.notFound().build();
		}
		carritoService.deleteById(id);
		return ResponseEntity.ok().build();
		}
		//Leer Todos
		@GetMapping
		public List<Carrito> readAll(){
			List<Carrito> carrito = StreamSupport
					.stream(carritoService.findAll().spliterator(), false)
					.collect(Collectors.toList());
			return carrito;
		}
		
}