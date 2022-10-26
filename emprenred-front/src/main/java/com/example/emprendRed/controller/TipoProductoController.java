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

import com.example.emprendRed.model.Productos;
import com.example.emprendRed.model.TipoProducto;
import com.example.emprendRed.service.TipoProductoService;

@RestController
@RequestMapping("/api/tipoproducto")
public class TipoProductoController {
	@Autowired
	private TipoProductoService tipoproductoService;

	//Crear Producto
	@PostMapping
	public ResponseEntity<?> create(@RequestBody TipoProducto tipoproducto){
		return ResponseEntity.status(HttpStatus.CREATED).body(tipoproductoService.save(tipoproducto));
	}
	//Leer Producto
		@GetMapping("/{id}")
		public ResponseEntity<?> read(@PathVariable(value = "id") Long id){
			Optional<TipoProducto> oProductos = tipoproductoService.findById(id);
			if(!oProductos.isPresent()){
				return ResponseEntity.notFound().build();
			}
			return ResponseEntity.ok(oProductos);
				}
		//Actualizar
		@PutMapping("/{id}")
		public ResponseEntity<?> update (@RequestBody TipoProducto ProductosDetails, @PathVariable(value="id") Long id){
			Optional<TipoProducto> tipoproducto = tipoproductoService.findById(id);
			if(!tipoproducto.isPresent()) {
				return ResponseEntity.notFound().build();
			}
			//Otromodo BeanUtils.copyProperties(ProductosDetails, productos.get());
			tipoproducto.get().setDescripcion(ProductosDetails.getDescripcion());
			
		
			return ResponseEntity.status(HttpStatus.CREATED).body(tipoproductoService.save(tipoproducto.get()));
		}
		//Borrar Usuario
		@DeleteMapping("/{id}")
		public ResponseEntity <?> delete (@PathVariable(value="id")Long id){
		
			if(!tipoproductoService.findById(id).isPresent())	{
			return ResponseEntity.notFound().build();
		}
		tipoproductoService.deleteById(id);
		return ResponseEntity.ok().build();
		}
		//Leer Todos los Productos
		@GetMapping
		public List<TipoProducto> readAll(){
			List<TipoProducto> tipoproductos = StreamSupport
					.stream(tipoproductoService.findAll().spliterator(), false)
					.collect(Collectors.toList());
			return tipoproductos;
		}
}
