package com.example.emprendRed.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

		//Leer carrito de un usuario
	@GetMapping("/search")
		public ResponseEntity<?>searchNativo(@RequestParam Long personaId){
				try {
					return ResponseEntity.status(HttpStatus.OK).body(carritoService.searchNativo(personaId));
				}catch (Exception e) {
						return  ResponseEntity.status(HttpStatus.NOT_FOUND).body((e.getMessage()));
					}
						}
		//Actualizar
		@PutMapping("/{id}")
		public ResponseEntity<?> update (@RequestBody Carrito CarritoDetails, @PathVariable(value="id") Long id){
			Optional<Carrito> carrito = carritoService.findById(id);
			if(!carrito.isPresent()) {
				return ResponseEntity.notFound().build();
			}
			//Otromodo BeanUtils.copyProperties(ProductosDetails, productos.get());
			//carrito.get().setId_usuario(CarritoDetails.getId_usuario());
			//carrito.get().setId_producto(CarritoDetails.getId_producto());
			//carrito.get().setPrecio(CarritoDetails.getPrecio());
			
		
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
		public ResponseEntity getCarritoByContext() throws Exception {
			return new ResponseEntity(carritoService.getCarritoByContext(),HttpStatus.OK);
		}

		@PostMapping ("/add-product")
		@Transactional
		public ResponseEntity<?> addProducts (@RequestParam Long productoId) throws Exception {
			carritoService.addProducto(productoId);
			return new ResponseEntity<>(HttpStatus.OK);
		}

	@PostMapping ("/quit-product")
	@Transactional
	public ResponseEntity<?> addProducts (@RequestParam List<Long> productoIds) throws Exception {
		carritoService.deleteProductoToCarrito(productoIds);
		return new ResponseEntity<>(HttpStatus.OK);
	}
		
}