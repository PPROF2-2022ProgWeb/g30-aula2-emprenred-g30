package com.example.emprendRed.service;


import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import com.example.emprendRed.Enum.DIRECTION;
import com.example.emprendRed.Enum.FILTERS;
import com.example.emprendRed.Enum.ORDER_BY;
import com.example.emprendRed.exceptions.BadRequestException;
import com.example.emprendRed.model.DTO.BasicResponseDTO;
import com.example.emprendRed.model.DTO.ProductoDTO;
import com.example.emprendRed.model.TipoProducto;
import com.example.emprendRed.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.emprendRed.model.Productos;
import com.example.emprendRed.repository.ProductosRepositorio;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ProductosServiceImpl implements ProductosService{
    @Autowired
    private ProductosRepositorio productoRepositorio;

    @Autowired
    private TipoProductoService tipoProductoService;
    @Autowired
    private  Utils utils;
    @Override
    @Transactional(readOnly=true)
    public BasicResponseDTO<Productos> findAll(String filters, String value, String orderBy, String dir, Integer size, Integer page,Boolean available) {

        HashMap<String,Object> map = new HashMap<>();

        if (filters!= null && Enum.valueOf(FILTERS.class,filters.toUpperCase())!=null&& value!=null){
            map.put("filters",Enum.valueOf(FILTERS.class,filters.toUpperCase()));
            map.put("value",value);
        }

        if (orderBy!=null && dir!= null
                && Enum.valueOf(ORDER_BY.class,orderBy.toUpperCase())!=null
                && Enum.valueOf(DIRECTION.class,dir.toUpperCase()) != null){
            map.put("orderBy",Enum.valueOf(ORDER_BY.class,orderBy.toUpperCase()));
            map.put("dir",Enum.valueOf(DIRECTION.class,dir.toUpperCase()));
        }

        if (available!=null){
            map.put("available",available);
        }


        if (size!= null && page!=null){
            map.put("size",size);
            map.put("offset",(page - 1) * size + 1);
        }

        Page<Productos> productos = productoRepositorio.findAllWithFilters(map);


        return new BasicResponseDTO<Productos>(productos.getTotalElements(),productos.getContent());
    }

    @Override
    @Transactional(readOnly=true)

    public Page<Productos> findAll(Pageable pageable) {
        return productoRepositorio.findAll(pageable);
    }

    @Override
    @Transactional(readOnly=true)

    public Optional<Productos> findById(Long id) {
        return productoRepositorio.findById(id);
    }

    @Override
    @Transactional
    public Productos save(ProductoDTO producto) {
        Productos productoDB = new Productos();
        productoDB.setNombre(producto.getNombre());

        TipoProducto tipoProducto = tipoProductoService.findById(producto.getId_tipo_producto()).orElseThrow(()->
                new BadRequestException("Categoria invalida")
        );
        if (producto.getId()!=null){
            productoDB.setId(producto.getId());
        }
        productoDB.setPrecio(producto.getPrecio());
        productoDB.setDescripcion(producto.getDescripcion());
        productoDB.setStock(producto.getStock());
        productoDB.setTipoProducto(tipoProducto);
        productoDB.setImagen(producto.getImagen());
        productoDB.setVendedor(utils.getPersonContext());
        return productoRepositorio.save(productoDB);
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        productoRepositorio.deleteById(id);
    }

    @Override
    @Transactional
    public void uploadFile (Long idProducto, MultipartFile file ) throws IOException {

        Productos oldProducto = productoRepositorio.findById(idProducto).orElseThrow(
                ()-> new BadRequestException("No se encontro el producto id :" + idProducto)
        );

        if(file.isEmpty()){
            throw new BadRequestException("La imagen no puede ser vacia");
        }
        if (file.getContentType().equals(MediaType.IMAGE_JPEG) || file.getContentType().equals(MediaType.IMAGE_PNG) ){
            throw new BadRequestException("Formato invalido");
        }
        String filePath = "src/main/resources/static/images/"+idProducto;
        file.transferTo(new File(filePath));

        oldProducto.setImagen(filePath);
        productoRepositorio.save(oldProducto);
    }

    @Override
    public List<Productos> searchNativo(String filtro) throws Exception {
        return productoRepositorio.searchNativo(filtro);
    }

    @Override
    public Productos update(ProductoDTO productoDTO, ProductoDTO producto) {
        return null;
    }

}

