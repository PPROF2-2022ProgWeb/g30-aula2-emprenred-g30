package com.example.emprendRed.service;


import java.io.IOException;
import java.util.List;
import java.util.Optional;

import com.example.emprendRed.model.DTO.BasicResponseDTO;
import com.example.emprendRed.model.DTO.ProductoDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.emprendRed.model.Carrito;
import com.example.emprendRed.model.Productos;
import org.springframework.web.multipart.MultipartFile;

public interface ProductosService {
 
	public BasicResponseDTO<Productos> findAll(String filters,String value,String orderBy,String dir,Integer size,Integer page,Boolean available);
	
	public Page<Productos> findAll(Pageable pageable);
	
	public Optional<Productos> findById(Long id);
	
	public Productos save(ProductoDTO producto);
	
	public void deleteById(Long id);

	void uploadFile (Long idProducto, MultipartFile file ) throws IOException ;

	List<Productos> searchNativo(String filtro) throws Exception;

	Productos update(ProductoDTO productoDTO,ProductoDTO producto);

}
