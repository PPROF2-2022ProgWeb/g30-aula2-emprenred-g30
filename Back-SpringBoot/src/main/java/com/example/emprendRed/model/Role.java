
package com.example.emprendRed.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;


class Role {
    
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    @Column (name="fecha_de_baja")
    @Temporal(TemporalType.DATE)
    private Date fechaDeBaja;

 

    public Role() {
    }

    public Role(Long id, String nombre, Date fechaDeBaja) {
        this.id = id;
        this.nombre = nombre;
        this.fechaDeBaja = fechaDeBaja;
        
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Date getFechaDeBaja() {
        return fechaDeBaja;
    }

    public void setFechaDeBaja(Date fechaDeBaja) {
        this.fechaDeBaja = fechaDeBaja;
    }


    
    
}
