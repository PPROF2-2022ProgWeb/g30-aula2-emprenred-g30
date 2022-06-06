
package com.example.emprendRed.model;

import java.util.Collection;
import static java.util.Collections.emptyList;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
public class Usuario implements UserDetails {
    
   
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column (unique = true)
    private String username;
    
    private String password;
    
    @Column (name="fecha_de_baja")
    @Temporal(TemporalType.DATE)
    private Date fechaDeBaja;
    
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="persona_id")
    private Persona persona;

    public Usuario() {
    }

    public Usuario(Long id, String email, String password, Date fechaDeBaja, Persona persona) {
        this.id = id;
        this.username = email;
        this.password = password;
        this.fechaDeBaja = fechaDeBaja;
        this.persona = persona;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

  

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getFechaDeBaja() {
        return fechaDeBaja;
    }

    public void setFechaDeBaja(Date fechaDeBaja) {
        this.fechaDeBaja = fechaDeBaja;
    }

 
    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    
    

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return emptyList();
    }

    

 
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
       return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    
    
}
