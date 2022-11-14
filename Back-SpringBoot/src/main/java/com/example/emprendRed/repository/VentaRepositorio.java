package com.example.emprendRed.repository;

import com.example.emprendRed.model.Venta;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.HashMap;

@Repository
public interface VentaRepositorio extends JpaRepository<Venta,Long> {

    Page<Venta> getAllByFilters (HashMap<String,Object> filters);
}
