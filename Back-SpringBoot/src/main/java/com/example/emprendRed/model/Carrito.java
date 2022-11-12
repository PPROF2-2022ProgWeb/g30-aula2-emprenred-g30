package com.example.emprendRed.model;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "carrito")
public class Carrito {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(columnDefinition = "persona_id")
	private Persona persona;

	@ManyToMany(cascade = {
			CascadeType.PERSIST,
			CascadeType.MERGE
	})
	@JoinTable(name = "carritos_productos",
			joinColumns = @JoinColumn(name = "carrito_id"),
			inverseJoinColumns = @JoinColumn(name = "producto_id")
	)
	private List<Productos> productos = new ArrayList<>();
	
    private Double precio;

	public Carrito() {
	}

	public Carrito(Long id, Persona persona, List<Productos> productos, Double precio) {
		this.id = id;
		this.persona = persona;
		this.productos = productos;
		this.precio = precio;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}

	public Persona getPersona() {
		return persona;
	}

	public void setPersona(Persona persona) {
		this.persona = persona;
	}

	public List<Productos> getProductos() {
		return productos;
	}

	public void setProductos(List<Productos> productos) {
		this.productos = productos;
	}
}
