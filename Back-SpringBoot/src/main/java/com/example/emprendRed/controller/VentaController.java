package com.example.emprendRed.controller;

import com.example.emprendRed.model.DTO.VentaDTO;
import com.example.emprendRed.model.Venta;
import com.example.emprendRed.service.VentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("api/ventas")
public class VentaController {

    @Autowired
    private VentaService ventaService;

    @PostMapping("")
    public ResponseEntity<Long> createVenta(@RequestParam  Long carritoId,
                                            @RequestParam String paymentType){

        return new ResponseEntity<>(ventaService.createVenta(carritoId,paymentType), HttpStatus.CREATED);
    }
    @PutMapping("/cancel/{id}")
    public ResponseEntity<Void> cancelVenta(@PathVariable Long id){
        ventaService.cancelVenta(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("")
    public ResponseEntity<Page<Venta>> getVenta (@RequestParam(value = "dateTo", required = false) Date dateTo,
                                                 @RequestParam(value = "dateFrom", required = false) Date dateFrom,
                                                 @RequestParam(value = "status", required = false)String status,
                                                 @RequestParam(value = "paymentType", required = false) String paymentType,
                                                 @RequestParam(value = "Size", required = false) Integer size,
                                                 @RequestParam(value = "page", required = false) Integer page){
        return new ResponseEntity<>(ventaService.getVenta(dateTo,dateFrom,status,paymentType,size,page),HttpStatus.OK);
    }

    @GetMapping("{ig}")
    public ResponseEntity<Venta> getVentaById (@PathVariable Long id){
        return new ResponseEntity<>(ventaService.getVentaById(id),HttpStatus.OK);
    }
}
