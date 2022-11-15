package com.example.emprendRed.model.DTO;

import com.example.emprendRed.Enum.ROLE;

import java.math.BigInteger;
import java.util.Date;

public class EditUserDTO {

    private Long id;
    private String nombre;
    private String apellido;
    private String localidad;
    private Date fechaNac;
    private String email;
    private ROLE role;

    public EditUserDTO() {
    }

    public EditUserDTO(Long id, String nombre, String apellido, String localidad, Date fechaNac, String email, ROLE role) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.localidad = localidad;
        this.fechaNac = fechaNac;
        this.email = email;
        this.role = role;
    }

 
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getLocalidad() {
        return localidad;
    }

    public void setLocalidad(String localidad) {
        this.localidad = localidad;
    }

    public Date getFechaNac() {
        return fechaNac;
    }

    public void setFechaNac(Date fechaNac) {
        this.fechaNac = fechaNac;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public ROLE getRole() {
        return role;
    }

    public void setRole(ROLE role) {
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


}
