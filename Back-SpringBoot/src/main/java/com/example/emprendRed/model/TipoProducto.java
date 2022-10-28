package com.example.emprendRed.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TipoProducto")
public class TipoProducto {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private Long id_TipoProducto;
	
	@Column(length=100)
	private String descripcion;

	public Long getId_TipoProducto() {
		return id_TipoProducto;
	}

	public void setId_TipoProducto(Long id_TipoProducto) {
		this.id_TipoProducto = id_TipoProducto;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
}
