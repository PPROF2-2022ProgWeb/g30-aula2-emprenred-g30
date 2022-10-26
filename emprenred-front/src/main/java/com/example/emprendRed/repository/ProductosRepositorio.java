package com.example.emprendRed.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.emprendRed.model.Productos;

@Repository
public interface ProductosRepositorio extends JpaRepository<Productos, Long> {

}
