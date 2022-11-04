package com.example.emprendRed.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.emprendRed.model.Productos;

import java.util.HashMap;

@Repository
public interface ProductosRepositorio extends JpaRepository<Productos, Long> {
 Page<Productos> findAllWithFilters(HashMap<String,Object>map);
}
