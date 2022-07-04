
package com.example.emprendRed.repository;

import com.example.emprendRed.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario,Long>{
    
   @Query("SELECT u FROM Usuario u WHERE u.id = :idUsuario AND u.fechaDeBaja IS NULL")
    Usuario buscarUsuarioPorId(@Param("idUsuario") Long idUsuario);
    
     @Query("SELECT u FROM Usuario u WHERE u.username = :username AND u.fechaDeBaja IS NULL")
    Usuario buscarUsuarioPorEmail(@Param("username") String username);
}