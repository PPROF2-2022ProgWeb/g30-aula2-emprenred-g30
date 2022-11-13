package com.example.emprendRed.Jwt.exceptions;

public class BadRequestException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public BadRequestException(String msg) {
        super(msg);
    }
}