export interface Compra{

 carritoId: number;
 paymentType: string;

}

export interface Venta {
    content:          Content[];
    empty:            boolean;
    first:            boolean;
    last:             boolean;
    number:           number;
    numberOfElements: number;
    pageable:         Pageable;
    size:             number;
    sort:             Sort;
    totalElements:    number;
    totalPages:       number;
}

export interface Content {
    comprador:       Dor;
    estado:          string;
    fechaDeCreacion: Date;
    id:              number;
    precioTotal:     number;
    productos:       Producto[];
    tipoDePago:      string;
    vendedor:        Dor;
}

export interface Dor {
    apellido:    string;
    fechaDeBaja: Date;
    fechaNac:    Date;
    id:          number;
    localidad:   string;
    nombre:      string;
}

export interface Producto {
    descripcion:  string;
    fechaDeBaja:  string;
    id:           number;
    imagen:       string;
    nombre:       string;
    precio:       number;
    stock:        number;
    tipoProducto: TipoProducto;
    vendedor:     Dor;
}

export interface TipoProducto {
    descripcion:    string;
    idTipoProducto: number;
}

export interface Pageable {
    offset:     number;
    pageNumber: number;
    pageSize:   number;
    paged:      boolean;
    sort:       Sort;
    unpaged:    boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}
