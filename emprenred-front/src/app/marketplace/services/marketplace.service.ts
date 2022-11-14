import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Carrito, Producto, ProductoCreado, RespuestaProductos, TipoProducto, UpdateProducto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {

  baseUrl = 'http://localhost:8080/api' 
  baseUrl0 = 'http://localhost:8080/'
  
  constructor(private http: HttpClient) { }
  productos: Producto[] = [];


  listarProductos( ): Observable<RespuestaProductos>{
   
    const url = `${ this.baseUrl}/productos`;

   return this.http.get<RespuestaProductos>(url)


}


getProducto(id:number): Observable<Producto>{
   
  const url = `${ this.baseUrl}/productos/${id}`;

 return this.http.get<Producto>(url)


}


getCategorias(): Observable<TipoProducto[]>{
   
  const url = `${ this.baseUrl}/tipoproducto`;

 return this.http.get<TipoProducto[]>(url)


}

enviarProducto(nombre: string ,descripcion: string,id_tipo_producto: number ,precio: number ,stock: number ): Observable<ProductoCreado> {


   const url = `${ this.baseUrl}/productos`;
   const body = { nombre,descripcion,id_tipo_producto,precio,stock};
   const headers = new HttpHeaders()
   .set('Authorization',localStorage.getItem('token') || ''); // o String vacio. 
  return this.http.post<ProductoCreado>(url, body, {headers})

}

modificarCategoria(id: number, descripcion: string): Observable<TipoProducto>{
   
  const url = `${ this.baseUrl}/tipoproducto/${id}`;
  const headers = new HttpHeaders()
  .set('Authorization',localStorage.getItem('token') || ''); // o String vacio. 
  const categoria: TipoProducto = {
id_TipoProducto: id,
descripcion: descripcion
  }
  
 return this.http.put<TipoProducto>(url, categoria, {headers})


}

putCategoria(descripcion: string): Observable<TipoProducto>{
   //hacer que mande string no objeto completo 
  const url = `${ this.baseUrl}/tipoproducto`;
  const headers = new HttpHeaders()
  .set('Authorization',localStorage.getItem('token') || ''); // o String vacio. 
  const categoria = {

descripcion: descripcion
  }
  
 return this.http.post<TipoProducto>(url, categoria, {headers})


}

deleteCategoria(id:number) {

  const url = `${ this.baseUrl}/tipoproducto/${id}`;
  const headers = new HttpHeaders()
  .set('Authorization',localStorage.getItem('token') || ''); // o String vacio.

  return this.http.delete(url, {headers})
}


getMyProducts(id:number): Observable<Producto[]> {

  const url = `${ this.baseUrl}/productos/search?filtro=${id}`;
  const headers = new HttpHeaders()
  .set('Authorization',localStorage.getItem('token') || ''); // o String vacio.


return this.http.get<Producto[]>(url, {headers})

}


updateProduct(id:number, producto: UpdateProducto): Observable<UpdateProducto> {

  const url = `${ this.baseUrl}/productos/${id}`;
  const headers = new HttpHeaders()
  .set('Authorization',localStorage.getItem('token') || ''); // o String vacio.
  

return this.http.put<UpdateProducto>(url, producto, {headers})

}


consultarCarrito(): Observable<Carrito> {

  const url = `${ this.baseUrl}/carrito/`;
  const headers = new HttpHeaders()
  .set('Authorization',localStorage.getItem('token') || ''); // o String vacio.


return this.http.get<Carrito>(url, {headers})

}

quitarProductoCarrito(id: number) {

  const url = `${ this.baseUrl}/carrito/quit-product/?productoIds=${id}`;
 
  const body = "";
  const headers = new HttpHeaders()
  .set('Authorization',localStorage.getItem('token') || ''); // o String vacio.

  return this.http.post(url, body, {headers})

}


  buscarProducto(busqueda:string ): Observable<RespuestaProductos>{
   
    const url = `${ this.baseUrl}/productos?filter=DESCRIPCION&value=${busqueda}`;

   return this.http.get<RespuestaProductos>(url)


}


generarCompra(idCarrito: number, paymentType: string) { 

  const url = `${ this.baseUrl}/ventas?carritoId=${idCarrito}&paymentType=${paymentType}`;
 const body = "";
  const headers = new HttpHeaders()
  .set('Authorization',localStorage.getItem('token') || ''); // o String vacio.

  return this.http.post(url, body, {headers} )

}


agregarProductoCarrito(id: number) {

  const url = `${ this.baseUrl}/carrito/add-product?productoId=${id}`;

  const body = ""; //mandar un body vacío, al ser post, para no cagarla. 
  const headers = new HttpHeaders()
  .set('Authorization',localStorage.getItem('token') || ''); // o String vacio.

  console.log(headers)
  return this.http.post(url, body, {headers} )

}

}