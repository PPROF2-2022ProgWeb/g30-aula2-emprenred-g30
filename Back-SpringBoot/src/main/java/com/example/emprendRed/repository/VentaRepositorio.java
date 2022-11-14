package com.example.emprendRed.repository;

import com.example.emprendRed.model.Venta;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.HashMap;

@Repository
public interface VentaRepositorio extends JpaRepository<Venta,Long> {

    Page<Venta> getAllByFilters (HashMap<String,Object> filters);

    @Query(value = "SELECT COUNT(*) FROM venta_productos vp" +
            " INNER JOIN ventas ON ventas.id = vp.venta_id" +
            " WHERE  vp.producto_id = :productoId AND ventas.estado IN ('PENDIENTE_PAGO','PAGADO') " , nativeQuery = true)
    Long countStocKProducto (@Param("productoId") Long productoId);

}
