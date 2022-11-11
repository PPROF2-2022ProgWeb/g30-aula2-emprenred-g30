
package com.example.emprendRed.model.DTO;

import com.example.emprendRed.Enum.ROLE;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;


public class PersonaUsuarioDto {
    
    private String nombre;
    private String apellido;
    private String localidad;
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @JsonFormat(pattern = "dd-MM-yyyy")
    private Date fechaNac;
    private String email;
    private String password;

    public PersonaUsuarioDto() {
    }

    public PersonaUsuarioDto(String nombre, String apellido, String localidad, Date fechaNac, String email, String contraseña) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.localidad = localidad;
        this.fechaNac = fechaNac;
        this.email = email;
        this.password = contraseña;
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


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
