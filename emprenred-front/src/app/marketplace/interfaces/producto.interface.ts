export interface RespuestaProductos {
        totalElements: number;
        data:          Producto[];
    }
    
    export interface Producto {
        id:           number;
        descripcion:  string;
        nombre:       string;
        precio:       number;
        fechaDeBaja?:  string | null;
        stock:        number;
        tipoProducto: TipoProducto;
        vendedor:     Vendedor;
        imagen?:       null | string;
    }
    
    export interface TipoProducto {
        idTipoProducto: number;
        descripcion:    string;
    }
    
    export interface Vendedor {
        id:          number;
        nombre:      string;
        apellido:    string;
        localidad:   string;
        fechaNac:    Date;
        fechaDeBaja: string | null;
    }
    