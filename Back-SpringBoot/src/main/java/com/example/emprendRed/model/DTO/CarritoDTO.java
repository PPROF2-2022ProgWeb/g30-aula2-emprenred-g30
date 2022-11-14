package com.example.emprendRed.model.DTO;

import java.util.ArrayList;
import java.util.List;

public class CarritoDTO {

    private Long id;


    private List<ProductoResponseDTO> productos = new ArrayList<>();

    private Double precio;


    public CarritoDTO() {
    }

    public CarritoDTO(Long id, List<ProductoResponseDTO> productos, Double precio) {
        this.id = id;
        this.productos = productos;
        this.precio = precio;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<ProductoResponseDTO> getProductos() {
        return productos;
    }

    public void setProductos(List<ProductoResponseDTO> productos) {
        this.productos = productos;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }
}
