package com.example.emprendRed.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "productos")
public class Productos {
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private Long id;
	
	private Long id_usuario;
	@Column(length=100)
	private String descripcion;
	
	private String nombre;
	
	private Double precio;
	
	private String fecha_de_baja;
	
	private Long catalogo_id;
	
	private Long stock;
	
	private Long id_tipo_producto;
	
	private String imagen;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(Long id_usuario) {
		this.id_usuario = id_usuario;
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

	public String getFecha_de_baja() {
		return fecha_de_baja;
	}

	public void setFecha_de_baja(String fecha_de_baja) {
		this.fecha_de_baja = fecha_de_baja;
	}

	public Long getCatalogo_id() {
		return catalogo_id;
	}

	public void setCatalogo_id(Long catalogo_id) {
		this.catalogo_id = catalogo_id;
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
