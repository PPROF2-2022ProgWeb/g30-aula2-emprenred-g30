import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoComponent } from './pages/producto/producto.component';



@NgModule({
  declarations: [
    ProductosComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MarketplaceModule { }
