package com.example.emprendRed.model.DTO;

import java.util.ArrayList;
import java.util.List;

public class VentaDTO {

    private Double precioTotal;
    private List<Long> productosId = new ArrayList<>();

    public Double getPrecioTotal() {
        return precioTotal;
    }

    public void setPrecioTotal(Double precioTotal) {
        this.precioTotal = precioTotal;
    }

    public List<Long> getProductosId() {
        return productosId;
    }

    public void setProductosId(List<Long> productosId) {
        this.productosId = productosId;
    }
}
