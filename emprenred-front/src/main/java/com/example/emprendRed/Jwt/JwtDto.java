/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.emprendRed.Jwt;

/**
 *
 * @author Usuario
 */
public class JwtDto {
    
    private String token;
    private String bearer = "Bearer";
    private String username;
    private Long id;

    public JwtDto(String jwt, String username, Long id) {
        this.token=jwt;
        this.username=username;
        this.id = id;
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
    
    

}
