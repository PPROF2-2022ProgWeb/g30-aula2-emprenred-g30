package com.example.emprendRed.controller;

import java.io.IOException;
import java.util.Optional;

import com.example.emprendRed.model.DTO.BasicResponseDTO;
import com.example.emprendRed.model.DTO.ProductoDTO;
import com.example.emprendRed.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/productos")
public class ProductosController {
	
	@Autowired
	private ProductosService productosService;
	@Autowired
	private Utils utils;

	//Crear Producto
	@PostMapping
	@PreAuthorize("hasAuthority('VENDEDOR')")
	public ResponseEntity<?> create(@RequestBody ProductoDTO producto){
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
	@PreAuthorize("hasAuthority('VENDEDOR')")
	public ResponseEntity<?> update (@RequestBody ProductoDTO productosDetails, @PathVariable(value="id") Long id){
		Optional<Productos> productos = productosService.findById(id);
		if(!productos.isPresent()) {
			return ResponseEntity.notFound().build();
		}

		if (!productos.get().getVendedor().getId().equals(utils.getPersonContext().getId())){
			return ResponseEntity.badRequest().build();
		}
		//Otromodo BeanUtils.copyProperties(ProductosDetails, productos.get());
		productosDetails.setId(productos.get().getId());

		return ResponseEntity.status(HttpStatus.CREATED).body(productosService.save(productosDetails));
	} 
	//Borrar Usuario
	@DeleteMapping("/{id}")
	@PreAuthorize("hasAuthority('VENDEDOR')")
	public ResponseEntity <?> delete (@PathVariable(value="id")Long id){
	
		if(!productosService.findById(id).isPresent())	{
		return ResponseEntity.notFound().build();
	}
	productosService.deleteById(id);
	return ResponseEntity.ok().build();
	}
	//Leer Todos los Productos
	@GetMapping
	public ResponseEntity<BasicResponseDTO<Productos>> readAll(@RequestParam (value = "filter", required = false) String filter,
													@RequestParam(value = "value",required = false) String value,
													@RequestParam (value = "orderBy", required = false ) String orderBy,
													@RequestParam(value = "dir",required = false) String dir,
													@RequestParam(value = "available", required = false)Boolean available,
													@RequestParam(value = "size",required = false) Integer size,
													@RequestParam(value = "page",required = false) Integer page){

		return new ResponseEntity<>(productosService.findAll(filter,value,orderBy,dir,size,page,available),HttpStatus.OK);
	}

	@PutMapping ("/{id}/file")
	@PreAuthorize("hasAuthority('VENDEDOR')")
	public ResponseEntity<?> uploadFile (	@PathVariable(value = "id") Long id,
											 @RequestParam ("file")MultipartFile file) throws IOException {
		productosService.uploadFile(id, file);
		return new ResponseEntity(HttpStatus.OK);
	}
	
}
	

