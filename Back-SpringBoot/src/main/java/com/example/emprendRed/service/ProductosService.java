package com.example.emprendRed.service;

import java.io.IOException;
import java.util.Optional;

import com.example.emprendRed.model.DTO.BasicResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.emprendRed.model.Productos;
import org.springframework.web.multipart.MultipartFile;

public interface ProductosService {
 
	public BasicResponseDTO<Productos> findAll(String filters,String value,String orderBy,String dir,Integer size,Integer page,Boolean available);
	
	public Page<Productos> findAll(Pageable pageable);
	
	public Optional<Productos> findById(Long id);
	
	public Productos save(Productos producto);
	
	public void deleteById(Long id);
	void uploadFile (Long idProducto, MultipartFile file ) throws IOException ;


}
