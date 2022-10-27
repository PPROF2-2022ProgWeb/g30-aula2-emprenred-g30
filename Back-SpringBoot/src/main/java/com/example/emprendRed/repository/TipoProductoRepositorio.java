package com.example.emprendRed.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.emprendRed.model.TipoProducto;

@Repository
public interface TipoProductoRepositorio extends JpaRepository<TipoProducto, Long>{

}
