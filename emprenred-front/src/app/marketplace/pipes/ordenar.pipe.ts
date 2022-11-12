import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(productos: Producto[], orderBy: string = ''): Producto[] {

    if (orderBy==='') {
      return productos
    }

    if(orderBy==='precioDsc') {
     productos = productos.sort((a,b) => a.precio - b.precio)  
    }
    if(orderBy==='precioAsc') {
      productos = productos.sort((a,b) => b.precio - a.precio)  
     }

     if(orderBy==='fechaDsc') {
      productos = productos.sort((a,b) => a.id - b.id)  
     }

     if(orderBy==='fechaAsc') {
      productos = productos.sort((a,b) => b.id - a.id)  
     }
  
  return productos
  }

}
