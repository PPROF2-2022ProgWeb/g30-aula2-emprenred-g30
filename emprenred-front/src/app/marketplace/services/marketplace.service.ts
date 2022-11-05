import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto, RespuestaProductos, TipoProducto } from '../interfaces/producto.interface';

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

}