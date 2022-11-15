
package com.example.emprendRed.repository;

import com.example.emprendRed.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario,Long>{
    
   @Query("SELECT u FROM Usuario u WHERE u.id = :idUsuario AND u.fechaDeBaja IS NULL")
    Usuario buscarUsuarioPorId(@Param("idUsuario") Long idUsuario);
    
     @Query("SELECT u FROM Usuario u WHERE u.username = :username AND u.fechaDeBaja IS NULL")
    Usuario buscarUsuarioPorEmail(@Param("username") String username);

     @Query(value = "SELECT p.id , p.nombre ,p.apellido,p.localidad,p.fecha_nac,u.username,u.role FROM usuario u " +
             "inner join personas p ON p.id = u.persona_id " , nativeQuery = true)
     List<Object[]> getAllUsers();

 @Query(value = "SELECT p.id , p.nombre ,p.apellido,p.localidad,p.fecha_nac,u.username,u.role FROM usuario u " +
         " inner join personas p ON p.id = u.persona_id " +
         " WHERE u.id = :id  ; " , nativeQuery = true)
  List< Object[] >getUserById(@Param("id") Long id);
}