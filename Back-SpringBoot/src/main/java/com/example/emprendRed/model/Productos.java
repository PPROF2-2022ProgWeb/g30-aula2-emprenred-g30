package com.example.emprendRed.model;

import javax.persistence.*;

@Entity
@Table(name = "productos")
public class Productos {
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private Long id;
	
	@Column(length=100)
	private String descripcion;
	
	private String nombre;
	
	private Double precio;
	
	private String fechaDeBaja;
	
	private Long stock;
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(columnDefinition = "tipo_productos_id")
	private  TipoProducto tipoProducto;

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(columnDefinition = "vendedor_id")
	private  Persona vendedor;
	private String imagen;

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

	public String getFechaDeBaja() {
		return fechaDeBaja;
	}

	public void setFechaDeBaja(String fecha_de_baja) {
		this.fechaDeBaja = fecha_de_baja;
	}


	public Long getStock() {
		return stock;
	}

	public void setStock(Long stock) {
		this.stock = stock;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public TipoProducto getTipoProducto() {
		return tipoProducto;
	}

	public void setTipoProducto(TipoProducto tipoProducto) {
		this.tipoProducto = tipoProducto;
	}

	public Persona getVendedor() {
		return vendedor;
	}

	public void setVendedor(Persona vendedor) {
		this.vendedor = vendedor;
	}
}
