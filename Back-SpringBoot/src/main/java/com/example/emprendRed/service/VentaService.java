package com.example.emprendRed.service;

import com.example.emprendRed.model.DTO.VentaDTO;
import com.example.emprendRed.model.Venta;
import org.springframework.data.domain.Page;

import java.util.Date;
import java.util.List;

public interface VentaService {

    Long createVenta(Long carritoId, String paymentType);
    void cancelVenta(Long id);
    Page<Venta> getVenta (Date dateTo, Date dateFrom, String status, String paymentType, Integer size, Integer page);
    Venta getVentaById (Long id);

}
