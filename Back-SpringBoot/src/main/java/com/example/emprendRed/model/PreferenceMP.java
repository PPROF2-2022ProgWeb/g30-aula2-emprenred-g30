package com.example.emprendRed.model;

import javax.persistence.*;

@Entity
@Table (name = "preference_mp_venta")
public class PreferenceMP {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long ventaId ;

    private String preferenceId;

    public PreferenceMP() {
    }

    public PreferenceMP(Long id, Long ventaId, String preferenceId) {
        this.id = id;
        this.ventaId = ventaId;
        this.preferenceId = preferenceId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getVentaId() {
        return ventaId;
    }

    public void setVentaId(Long ventaId) {
        this.ventaId = ventaId;
    }

    public String getPreferenceId() {
        return preferenceId;
    }

    public void setPreferenceId(String preferenceId) {
        this.preferenceId = preferenceId;
    }
}
