import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from '../carrito/carrito.component';
import { CompraComponent } from '../compra/compra.component';
import { ProductoComponent } from '../producto/producto.component';
import { TiendaComponent } from '../tienda/tienda.component';



@NgModule({
  declarations: [
    CarritoComponent,
    CompraComponent,
    ProductoComponent,
    TiendaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EcommerceModule { }
