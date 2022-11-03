
package com.example.emprendRed.model;

import java.util.Date;


public class PersonaUsuarioDto {
    
    private String nombre;
    private String apellido;
    private String localidad;
    private Date fechaNac;
    private String email;
    private String contraseña;

    public PersonaUsuarioDto() {
    }

    public PersonaUsuarioDto(String nombre, String apellido, String localidad, Date fechaNac, String email, String contraseña) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.localidad = localidad;
        this.fechaNac = fechaNac;
        this.email = email;
        this.contraseña = contraseña;
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

    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }
    
            
    
}
