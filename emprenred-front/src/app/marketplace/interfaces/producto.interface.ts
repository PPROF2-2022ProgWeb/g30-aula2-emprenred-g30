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
        id_TipoProducto: number;
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
    
    export interface ProductoCreado {
        id:           number;
        descripcion:  string;
        nombre:       string;
        precio:       number;
        fechaDeBaja:  null;
        stock:        number;
        tipoProducto: TipoProducto;
        vendedor:     Vendedor;
        imagen:       null;
    }
export interface UpdateProducto
    {
        descripcion: string,
    id: number,
        id_tipo_producto: number,
        imagen: string,
    nombre: string,
        precio: number,
        stock: number
      }

      export interface Carrito {
        id:        number;
        persona:   Persona;
        productos: Producto[];
        precio:    number;
    }
    
    export interface Persona {
        id:          number;
        nombre:      string;
        apellido:    string;
        localidad:   null;
        fechaNac:    Date;
        fechaDeBaja: null;
    }
    

    
