import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {

  baseUrl = 'http://localhost:8080/api' 
  
  constructor(private http: HttpClient) { }
  productos: Producto[] = [];

  listarProductos( ): Observable<Producto[]>{
   
    const url = `${ this.baseUrl}/productos`;

   return this.http.get<Producto[]>(url)


}


getProducto(id:number): Observable<Producto>{
   
  const url = `${ this.baseUrl}/productos/${id}`;

 return this.http.get<Producto>(url)


}

}