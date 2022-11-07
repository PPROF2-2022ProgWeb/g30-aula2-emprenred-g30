import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Producto, ProductoCreado, RespuestaProductos, TipoProducto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {

  baseUrl = 'http://localhost:8080/api' 
  
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
}