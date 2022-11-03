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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.emprendRed.model.Productos;
import com.example.emprendRed.service.ProductosService;

@RestController
@RequestMapping("/api/productos")
public class ProductosController {
	
	@Autowired
	private ProductosService productosService;

	//Crear Producto
	@PostMapping
	public ResponseEntity<?> create(@RequestBody Productos producto){
		return ResponseEntity.status(HttpStatus.CREATED).body(productosService.save(producto));
	}
	//Leer Producto
	@GetMapping("/{id}")
	public ResponseEntity<?> read(@PathVariable(value = "id") Long id){
		Optional<Productos> oProductos = productosService.findById(id);
		if(!oProductos.isPresent()){
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(oProductos);
			}
	
	//Leer carrito de un usuario
	@GetMapping("/search")
		public ResponseEntity<?>searchNativo(@RequestParam String filtro){
				try {
					return ResponseEntity.status(HttpStatus.OK).body(productosService.searchNativo(filtro));
				}catch (Exception e) {
						return  ResponseEntity.status(HttpStatus.NOT_FOUND).body((e.getMessage()));
					}
						}
	//Actualizar
	@PutMapping("/{id}")
	public ResponseEntity<?> update (@RequestBody Productos ProductosDetails, @PathVariable(value="id") Long id){
		Optional<Productos> productos = productosService.findById(id);
		if(!productos.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		//Otromodo BeanUtils.copyProperties(ProductosDetails, productos.get());

		productos.get().setNombre(ProductosDetails.getNombre());
		productos.get().setId_usuario(ProductosDetails.getId_usuario());
		productos.get().setPrecio(ProductosDetails.getPrecio());
		productos.get().setDescripcion(ProductosDetails.getFecha_de_baja());
		productos.get().setCatalogo_id(ProductosDetails.getCatalogo_id());
		productos.get().setStock(ProductosDetails.getStock());
		productos.get().setId_tipo_producto(ProductosDetails.getId_tipo_producto());
		productos.get().setImagen(ProductosDetails.getImagen());
		
		return ResponseEntity.status(HttpStatus.CREATED).body(productosService.save(productos.get()));
	} 
	//Borrar Usuario
	@DeleteMapping("/{id}")
	public ResponseEntity <?> delete (@PathVariable(value="id")Long id){
	
		if(!productosService.findById(id).isPresent())	{
		return ResponseEntity.notFound().build();
	}
	productosService.deleteById(id);
	return ResponseEntity.ok().build();
	}
	//Leer Todos los Productos
	@GetMapping
	public List<Productos> readAll(){
		List<Productos> productos = StreamSupport
				.stream(productosService.findAll().spliterator(), false)
				.collect(Collectors.toList());
		return productos;
	}
	
}
	

