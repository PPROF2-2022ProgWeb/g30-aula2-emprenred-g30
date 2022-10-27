
package com.example.emprendRed.model;

import java.util.Arrays;
import java.util.Collection;
import static java.util.Collections.emptyList;
import java.util.Date;
import javax.persistence.*;

import com.example.emprendRed.Enum.ROLE;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.switchuser.SwitchUserGrantedAuthority;

@Entity
public class Usuario implements UserDetails {
    
   
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column (unique = true)
    private String username;
    
    private String password;
    @Enumerated(EnumType.STRING)
    private ROLE role;
    
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
        return Arrays.asList(new SimpleGrantedAuthority( this.role.toString()));
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

    public ROLE getRole() {
        return role;
    }

    public void setRole(ROLE role) {
        this.role = role;
    }
}
