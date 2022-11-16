package com.example.emprendRed.service;


import com.example.emprendRed.model.Productos;
import com.example.emprendRed.model.Venta;
import com.mercadopago.client.preference.PreferenceClient;
import com.mercadopago.client.preference.PreferenceItemRequest;
import com.mercadopago.client.preference.PreferenceRequest;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.preference.Preference;
import org.springframework.stereotype.Service;
import com.mercadopago.MercadoPagoConfig;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Service
public class MPServiceImpl implements MPService {

    private static final String  ACCESS_TOKEN_MP = "TEST-3957485063425593-111500-3db6d053f084f16672e85b213e771d2c-140920788";

    @Override
    public Preference create(Venta venta) throws MPException, MPApiException {

        MercadoPagoConfig.setAccessToken(ACCESS_TOKEN_MP);
        String notificationUrl = "http://localhost:8080/generic";

        PreferenceClient client = new PreferenceClient();
        Preference p = new Preference();

        List<PreferenceItemRequest> items = new ArrayList<>();
        for (Productos productos:  venta.getProductos()) {

            PreferenceItemRequest item =
                    PreferenceItemRequest.builder()
                            .title(productos.getNombre())
                            .quantity(1)
                            .unitPrice(new BigDecimal(productos.getPrecio().toString()))
                            .build();
            items.add(item);
        }

        PreferenceRequest request = PreferenceRequest.builder().items(items).build();

        return client.create(request);


    }
}

