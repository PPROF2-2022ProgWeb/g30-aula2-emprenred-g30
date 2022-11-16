
package com.example.emprendRed.service;

import com.example.emprendRed.Enum.ROLE;
import com.example.emprendRed.Jwt.JwtDto;
import com.example.emprendRed.Jwt.JwtProvider;
import com.example.emprendRed.Jwt.JwtUtils;
import com.example.emprendRed.exceptions.BadRequestException;
import com.example.emprendRed.model.DTO.EditUserDTO;
import com.example.emprendRed.model.Persona;
import com.example.emprendRed.model.DTO.PersonaUsuarioDto;
import com.example.emprendRed.model.Usuario;
import com.example.emprendRed.repository.PersonaRepositorio;
import com.example.emprendRed.repository.UsuarioRepositorio;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.example.emprendRed.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class AppService implements UserDetailsService{
    
    @Autowired
    PersonaRepositorio personaRepositorio;
    
    @Autowired
    UsuarioRepositorio usuarioRepositorio;
    @Autowired
    JwtUtils jwtUtils;

    @Autowired
     private Utils utils;
    
    @Autowired
    private BCryptPasswordEncoder encoder;
    @Autowired
    private AuthenticationManager authenticationManager;
     @Autowired
     private JwtProvider jwtProvider;
    
    
    public void crear (PersonaUsuarioDto request) throws Exception{
        
        Usuario usuario = usuarioRepositorio.buscarUsuarioPorEmail(request.getEmail());
        if (usuario!= null) {
             throw new DuplicateKeyException("Ya existe usuario con email: " + request.getEmail());
        }
        
        Persona persona = new Persona();
        usuario = new Usuario();
        
        validacion(request);
   
             persona.setNombre(request.getNombre());
             persona.setApellido(request.getApellido());
             persona.setFechaNac(request.getFechaNac());
             persona.setLocalidad(request.getLocalidad());
             
             usuario.setUsername(request.getEmail());
             usuario.setPassword(encoder.encode(request.getPassword()));
             usuario.setPersona(persona);
             usuario.setRole(ROLE.USUARIO);

             personaRepositorio.save(persona);
             usuarioRepositorio.save(usuario);
    }
    
    
    
    private void validacion (PersonaUsuarioDto personaRequest) throws Exception{
        
        
        if (personaRequest.getNombre().length() >50 || personaRequest.getNombre().length() <2) {
              throw new Exception ("error en nombre");
            
        }
        
        if (personaRequest.getApellido().length() >50 || personaRequest.getApellido().length() <2 ) {
          throw new Exception ("error en apellido");
        }
  
    }
    
    
    public void eliminar (Long id){

        Usuario usuario = usuarioRepositorio.getById(id);
        Persona persona = usuario.getPersona();
        
        persona.setFechaDeBaja(new Date ());
        usuario.setFechaDeBaja(new Date());
        
        personaRepositorio.save(persona);
        
    }
    
    public Persona mostraPorId(Long id){
        
       Persona persona = personaRepositorio.findById(id).orElse(null);
       
        if (persona.getFechaDeBaja()==null) {
         return persona;   
        }
         return null;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario user= usuarioRepositorio.buscarUsuarioPorEmail(username);
        
        if (user==null) {
            throw new UsernameNotFoundException("No hay usuario con ese nombre");
            
        }
               
       return user;
    }
    
//    public JwtDto login (Usuario usuario) throws Exception{
//         
//        Authentication authentication =
//                authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(usuario.getUsername(), usuario.getPassword()));
//        //SecurityContextHolder.getContext().setAuthentication(authentication);
//        String jwt = jwtProvider.generateToken(authentication);
//        UserDetails userDetails = (UserDetails)authentication.getPrincipal();
//        
//        JwtDto jwtDto = new JwtDto(jwt, userDetails.getUsername(),usuarioRepositorio.buscarUsuarioPorEmail(usuario.getUsername()).getId());
//        return jwtDto;
//        
//        
//        
    
    
        public JwtDto  login (Usuario usuario) throws Exception {

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(usuario.getUsername(), usuario.getPassword()));
        } catch (BadCredentialsException e) {
            throw new UsernameNotFoundException ("Error de Login");
        }

       String jwt = jwtUtils.generateToken(loadUserByUsername(usuario.getUsername()));
        Usuario user = usuarioRepositorio.buscarUsuarioPorEmail(usuario.getUsername());
        return  new JwtDto(jwt, usuario.getUsername(),user.getId(),user.getRole());
    }


    public List<EditUserDTO> getUsers (){
        List<Object[]>objects =usuarioRepositorio.getAllUsers();
        List<EditUserDTO> editUserDTOList = new ArrayList<>();
        for (Object[] obj: objects) {
            editUserDTOList.add(mapObjectToDTO(obj));
        }
    return editUserDTOList;
    }

    public EditUserDTO getUserById(Long id){

       Object[] obj = usuarioRepositorio.getUserById(id).get(0);

        if (obj.length > 0) {
            return mapObjectToDTO(obj);
        }
        return null;
    }

    public Long putUserById(Long id, EditUserDTO editUserDTO){

        Usuario usuario = usuarioRepositorio.findById(id).orElseThrow(()-> new BadRequestException("No se encontro el usuario id " + id));

        String role = utils.getRoleContext();
        if (!role.equals(ROLE.ADMINISTRADOR.toString()) &&
            id != utils.getUserContext().getId()){
            throw  new BadRequestException("No tiene lso permisos para editar este usuario");
        }

        usuario.getPersona().setNombre(editUserDTO.getNombre());
        usuario.getPersona().setApellido(editUserDTO.getApellido());
        usuario.getPersona().setLocalidad(editUserDTO.getLocalidad());
        usuario.getPersona().setFechaNac(editUserDTO.getFechaNac());
        if (role.equals(ROLE.ADMINISTRADOR.toString())){
            usuario.setRole(editUserDTO.getRole());
        }

        usuarioRepositorio.save(usuario);

        return id;
    }

    public EditUserDTO mapObjectToDTO (Object[] objet) {
        EditUserDTO editUserDTO = new EditUserDTO();
        editUserDTO.setId( ((BigInteger) objet[0]).longValue());
        editUserDTO.setNombre( (String) objet[1]);
        editUserDTO.setApellido( (String) objet[2]);
        editUserDTO.setLocalidad( (String) objet[3]);
        editUserDTO.setFechaNac( (Date) objet[4]);
        editUserDTO.setEmail( (String) objet[5]);
        editUserDTO.setRole( (Enum.valueOf(ROLE.class,(String) objet[6])));

        return editUserDTO;
    }

    public void deleteUSer (Long id){
        Usuario usuario = usuarioRepositorio.findById(id).orElseThrow(()-> new BadRequestException("no se econtro usuario"));

        usuario.setFechaDeBaja(new Date());

        usuarioRepositorio.save(usuario);
    }
    
}
