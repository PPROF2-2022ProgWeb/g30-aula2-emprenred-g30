package com.example.emprendRed.model;

import com.example.emprendRed.Enum.PAYMENT_TYPE;
import com.example.emprendRed.Enum.VENTA_STATUS;
import org.hibernate.exception.DataException;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "ventas")
public class Venta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double precioTotal;

    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaDeCreacion;

    @Enumerated(EnumType.STRING)
    private VENTA_STATUS estado;

    @Enumerated(EnumType.STRING)
    private PAYMENT_TYPE tipoDePago;

    @ManyToMany(cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    @JoinTable(name = "venta_productos",
            joinColumns = @JoinColumn(name = "venta_id"),
            inverseJoinColumns = @JoinColumn(name = "producto_id")
    )
    private List<Productos> productos;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(columnDefinition = "comprador_id")
    private Persona comprador;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(columnDefinition = "vendedor_id")
    private Persona vendedor;

    public Venta() {
    }

    public Venta(Long id, Double precioTotal, Date fechaDeCreacion, VENTA_STATUS estado, PAYMENT_TYPE tipoDePago, List<Productos> productos, Persona comprador, Persona vendedor) {
        this.id = id;
        this.precioTotal = precioTotal;
        this.fechaDeCreacion = fechaDeCreacion;
        this.estado = estado;
        this.tipoDePago = tipoDePago;
        this.productos = productos;
        this.comprador = comprador;
        this.vendedor = vendedor;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getPrecioTotal() {
        return precioTotal;
    }

    public void setPrecioTotal(Double precioTotal) {
        this.precioTotal = precioTotal;
    }

    public Date getFechaDeCreacion() {
        return fechaDeCreacion;
    }

    public void setFechaDeCreacion(Date fechaDeCreacion) {
        this.fechaDeCreacion = fechaDeCreacion;
    }

    public VENTA_STATUS getEstado() {
        return estado;
    }

    public void setEstado(VENTA_STATUS estado) {
        this.estado = estado;
    }

    public PAYMENT_TYPE getTipoDePago() {
        return tipoDePago;
    }

    public void setTipoDePago(PAYMENT_TYPE tipoDePago) {
        this.tipoDePago = tipoDePago;
    }

    public List<Productos> getProductos() {
        return productos;
    }

    public void setProductos(List<Productos> productos) {
        this.productos = productos;
    }

    public Persona getComprador() {
        return comprador;
    }

    public void setComprador(Persona comprador) {
        this.comprador = comprador;
    }

    public Persona getVendedor() {
        return vendedor;
    }

    public void setVendedor(Persona vendedor) {
        this.vendedor = vendedor;
    }
}
