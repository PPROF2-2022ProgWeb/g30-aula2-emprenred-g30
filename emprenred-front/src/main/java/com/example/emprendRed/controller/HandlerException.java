
package com.example.emprendRed.controller;


import com.example.emprendRed.model.Message;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class HandlerException extends ResponseEntityExceptionHandler {
    
    
   @ExceptionHandler(value = DuplicateKeyException.class)
       public ResponseEntity<?> duplicatekeyException(DuplicateKeyException ex) {
           
        return new ResponseEntity(new Message(ex.getMessage()),HttpStatus.BAD_REQUEST);
    } 
    
    
    @ExceptionHandler(value = UsernameNotFoundException.class)
    public ResponseEntity<?> usernameNotFoundException(UsernameNotFoundException ex){
        return new ResponseEntity(new Message(ex.getMessage()),HttpStatus.NOT_FOUND);
    }
}
