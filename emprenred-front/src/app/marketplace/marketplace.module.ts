import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';
import { TablaProductoComponent } from './components/tabla-producto/tabla-producto.component';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    ProductosComponent,
    ProductoComponent,
    TablaProductosComponent,
    TablaProductoComponent,
    OrdenarPipe
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule,
    PrimeNgModule
  ],
  exports: [
    OrdenarPipe
  ]
})
export class MarketplaceModule { }
