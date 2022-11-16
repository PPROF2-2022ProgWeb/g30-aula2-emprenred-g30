package com.example.emprendRed.repository;

import com.example.emprendRed.model.PreferenceMP;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PreferenceMPRepositorio extends JpaRepository<PreferenceMP,Long> {


    PreferenceMP getPreferenceMPByVentaId(Long ventaId);
}
