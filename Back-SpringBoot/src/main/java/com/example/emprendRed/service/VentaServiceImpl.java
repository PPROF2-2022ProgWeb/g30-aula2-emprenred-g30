package com.example.emprendRed.service;

import com.example.emprendRed.Enum.FILTERS;
import com.example.emprendRed.Enum.PAYMENT_TYPE;
import com.example.emprendRed.Enum.ROLE;
import com.example.emprendRed.Enum.VENTA_STATUS;
import com.example.emprendRed.exceptions.BadRequestException;
import com.example.emprendRed.model.Carrito;
import com.example.emprendRed.model.DTO.VentaDTO;
import com.example.emprendRed.model.Persona;
import com.example.emprendRed.model.Productos;
import com.example.emprendRed.model.Venta;
import com.example.emprendRed.repository.CarritoRepositorio;
import com.example.emprendRed.repository.ProductosRepositorio;
import com.example.emprendRed.repository.VentaRepositorio;
import com.example.emprendRed.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

@Service
public class VentaServiceImpl implements VentaService {

    @Autowired
    private VentaRepositorio ventaRepositorio;

    @Autowired
    private CarritoRepositorio carritoRepositorio;
    @Autowired
    private Utils utils;
    @Override
    @Transactional
    public Long createVenta(Long carritoId, String paymentType) {
        Persona comprador = utils.getPersonContext();
        Carrito carrito = carritoRepositorio.findById(carritoId).orElseThrow(()->new BadRequestException("Id de carrito invalido"));

        if (carrito.getPersona().getId()!= comprador.getId() && carrito.getProductos().isEmpty()){
            throw new BadRequestException("carrito invalido");
        }

        if (!paymentType.equalsIgnoreCase(PAYMENT_TYPE.ACORDADO_CON_VENDEDOR.toString()) &&
                !paymentType.equalsIgnoreCase(PAYMENT_TYPE.MERCADO_PAGO.toString())){
            throw new BadRequestException("forma de pago invalido");
        }
        Persona vendedor = carrito.getProductos().get(0).getVendedor();

        Venta venta = new Venta();
        venta.setComprador(comprador);
        venta.setVendedor(vendedor);
        venta.setProductos(carrito.getProductos());
        venta.setPrecioTotal(carrito.getPrecio());
        venta.setEstado(VENTA_STATUS.PENDIENTE_PAGO);
        venta.setFechaDeCreacion(new Date());
        venta.setTipoDePago(Enum.valueOf(PAYMENT_TYPE.class,paymentType.toUpperCase()));

        Venta newVenta = ventaRepositorio.save(venta);

        carrito.setProductos(new ArrayList<>());
        carritoRepositorio.save(carrito);

        return newVenta.getId();
    }

    @Override
    public void cancelVenta(Long id) {
        Persona persona = utils.getPersonContext();
        Venta venta = ventaRepositorio.findById(id).orElseThrow(()->new BadRequestException("No se encontro la venta id " + id));
        String role = utils.getRoleContext();
        if (venta.getComprador().getId()!= persona.getId() &&
            venta.getVendedor().getId()!= persona.getId() &&
          role.equalsIgnoreCase(ROLE.ADMINISTRADOR.toString())){
            new BadRequestException("No tiene accesoa esta venta");
        }
        if (venta.getEstado().equals(VENTA_STATUS.PAGADO)){
            new BadRequestException("No se puede cancelar una venta en estado pagado");
        }
        venta.setEstado(VENTA_STATUS.CANCELADO);

        ventaRepositorio.save(venta);
    }

    @Override
    public Page<Venta> getVenta(Date dateTo, Date dateFrom, String status, String paymentType, Integer size, Integer page) {

        HashMap<String,Object> map = new HashMap<>();
        map.put("role",utils.getRoleContext());
        map.put("personId",utils.getPersonContext().getId());

        if (status!= null && Enum.valueOf(VENTA_STATUS.class,status.toUpperCase())!=null){
            map.put("estado",Enum.valueOf(VENTA_STATUS.class,status.toUpperCase()));
        }
        if (paymentType!= null && Enum.valueOf(PAYMENT_TYPE.class,paymentType.toUpperCase())!=null){
            map.put("tipoDePago",Enum.valueOf(PAYMENT_TYPE.class,paymentType.toUpperCase()));
        }
        if (dateTo!= null){
            map.put("dateTo",dateTo);
        }
        if (dateFrom!= null){
            map.put("dateFrom",dateFrom);
        }

        if (size!= null && page!=null){
            map.put("size",size);
            map.put("offset",(page - 1) * size + 1);
        }

        return ventaRepositorio.getAllByFilters(map);
    }

    @Override
    public Venta getVentaById(Long id) {
        Persona persona = utils.getPersonContext();
        String role = utils.getRoleContext();
        Venta venta = ventaRepositorio.findById(id).orElseThrow(()->new BadRequestException("No se encontro la venta id " + id));
        if (venta.getComprador().getId()!= persona.getId() &&
                venta.getVendedor().getId()!= persona.getId() && role.equalsIgnoreCase(ROLE.ADMINISTRADOR.toString())){
            new BadRequestException("No tiene accesoa esta venta");
        }

        return venta;
    }

}
