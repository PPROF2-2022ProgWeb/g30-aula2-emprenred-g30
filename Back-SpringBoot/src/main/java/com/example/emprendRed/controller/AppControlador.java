
package com.example.emprendRed.controller;

import com.example.emprendRed.model.DTO.EditUserDTO;
import com.example.emprendRed.model.DTO.PersonaUsuarioDto;
import com.example.emprendRed.model.Usuario;
import com.example.emprendRed.repository.UsuarioRepositorio;
import com.example.emprendRed.service.AppService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

import static java.lang.Long.parseLong;


@RestController
@RequestMapping
@Api(value = "AppController")
public class AppControlador {
    
    @Autowired
    AppService service;
    @Autowired
    UsuarioRepositorio usuarioRepositorio;
    
    
  // @CrossOrigin(origins = "http://localhost:5500")
   @PostMapping("/registro")
   public ResponseEntity<?> crear (@RequestBody  PersonaUsuarioDto personaRequest) throws Exception{
       
      service.crear(personaRequest);

       return new ResponseEntity (personaRequest,HttpStatus.CREATED);
       
   }
   
   @PostMapping("/login")
   public ResponseEntity<?> login (@RequestBody Usuario usuario) throws Exception{
       
       return new ResponseEntity(service.login(usuario),HttpStatus.OK);
   }
   
   
  
   @GetMapping("/{id}")
   public ResponseEntity<?> getPersonByid (@PathVariable Long id){

       return new ResponseEntity (service.mostraPorId(id),HttpStatus.OK);
   }


    @GetMapping("valid")
    public ResponseEntity<?> getUservalid (HttpServletRequest request){



        String token = request.getHeader("Authorization");
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        return new ResponseEntity<>(userDetails.getAuthorities(), HttpStatus.OK);
    }
    @ApiOperation(value = "Retorna lista de usaurios")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Retorna a lista de usuarios"),
            @ApiResponse(code = 403, message = "No autorizado para hacer la transacsion"),
            @ApiResponse(code = 500, message = "Ups! error de sistema "),
    })
    @GetMapping("users")
    @PreAuthorize("hasAuthority('ADMINISTRADOR')")
    public ResponseEntity<?> getUsers (){
       return new ResponseEntity<>(service.getUsers(), HttpStatus.OK);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<?> getUserById (@PathVariable Long id){

        return new ResponseEntity (service.getUserById(id),HttpStatus.OK);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<?> getUserById (@PathVariable ("id") Long id,
                                          @RequestBody EditUserDTO editUserDTO){

        return new ResponseEntity (service.putUserById(id,editUserDTO),HttpStatus.OK);
    }
}
