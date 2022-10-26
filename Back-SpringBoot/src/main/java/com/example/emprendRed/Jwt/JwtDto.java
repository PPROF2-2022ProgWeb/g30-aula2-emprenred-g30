/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.emprendRed.Jwt;

import com.example.emprendRed.Enum.ROLE;

/**
 *
 * @author Usuario
 */
public class JwtDto {
    
    private String token;
    private String bearer = "Bearer";
    private String username;
    private Long id;

    private ROLE role;



    public JwtDto(String token, String username, Long id, ROLE role) {
        this.token = token;
        this.bearer = bearer;
        this.username = username;
        this.id = id;
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getBearer() {
        return bearer;
    }

    public void setBearer(String bearer) {
        this.bearer = bearer;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public ROLE getRole() {
        return role;
    }

    public void setRole(ROLE role) {
        this.role = role;
    }
}
