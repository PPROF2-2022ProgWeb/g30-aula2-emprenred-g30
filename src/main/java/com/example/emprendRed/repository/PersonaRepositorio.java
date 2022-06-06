
package com.example.emprendRed.repository;

import com.example.emprendRed.model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaRepositorio  extends JpaRepository <Persona,Long>{
    
}
