package com.example.emprendRed.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.emprendRed.model.Carrito;

@Repository
public interface CarritoRepositorio extends JpaRepository<Carrito, Long> {

}
