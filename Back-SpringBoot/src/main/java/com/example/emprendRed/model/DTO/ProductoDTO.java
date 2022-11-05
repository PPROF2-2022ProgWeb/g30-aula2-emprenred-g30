package com.example.emprendRed.model.DTO;

public class ProductoDTO {

    private Long id;

     private String descripcion;

    private String nombre;

    private Double precio;

    private Long stock;

    private Long id_tipo_producto;

    private String imagen;

    public ProductoDTO() {
    }

    public ProductoDTO(Long id, String descripcion, String nombre, Double precio, Long stock, Long id_tipo_producto, String imagen) {
        this.id = id;

        this.descripcion = descripcion;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.id_tipo_producto = id_tipo_producto;
        this.imagen = imagen;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public Long getStock() {
        return stock;
    }

    public void setStock(Long stock) {
        this.stock = stock;
    }

    public Long getId_tipo_producto() {
        return id_tipo_producto;
    }

    public void setId_tipo_producto(Long id_tipo_producto) {
        this.id_tipo_producto = id_tipo_producto;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }
}
