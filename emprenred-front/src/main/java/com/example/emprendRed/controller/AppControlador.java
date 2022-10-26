
package com.example.emprendRed.controller;

import com.example.emprendRed.Jwt.JwtDto;
import com.example.emprendRed.model.PersonaUsuarioDto;
import com.example.emprendRed.model.Usuario;
import com.example.emprendRed.repository.UsuarioRepositorio;
import com.example.emprendRed.service.AppService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

import static java.lang.Long.parseLong;


@RestController
@RequestMapping
public class AppControlador {
    
    @Autowired
    AppService service;
    @Autowired
    UsuarioRepositorio usuarioRepositorio;
    
    
  // @CrossOrigin(origins = "http://localhost:5500")
   @PostMapping("/registro")
   public ResponseEntity<?> crear (@RequestBody PersonaUsuarioDto personaRequest) throws Exception{
       
      service.crear(personaRequest);
//      HttpHeaders headers = new HttpHeaders();
//      headers.add("Access-Control-Allow-Origin", "http://localhost/**");
//headers.add("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
//headers.add("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//       
       return new ResponseEntity (personaRequest,HttpStatus.CREATED);
       
   }
   
   @PostMapping("/login")
   public ResponseEntity<?> login (@RequestBody Usuario usuario) throws Exception{
       
       return new ResponseEntity(service.login(usuario),HttpStatus.OK);
   }
   
   
  
   @GetMapping("/{id}")
   public ResponseEntity<?> getByid (@PathVariable Long id){
       
//        HttpHeaders headers = new HttpHeaders();
//     headers.add("Access-Control-Allow-Origin", "http://localhost:5500/");
//    headers.add("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS");
//    headers.add("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
System.out.println("");
       return new ResponseEntity (service.mostraPorId(id),HttpStatus.OK);
   }


    @GetMapping("valid")
    public ResponseEntity<?> getUservalid (HttpServletRequest request){



        String token = request.getHeader("Authorization");
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        return new ResponseEntity<>(userDetails.getAuthorities(), HttpStatus.OK);
    }
}
