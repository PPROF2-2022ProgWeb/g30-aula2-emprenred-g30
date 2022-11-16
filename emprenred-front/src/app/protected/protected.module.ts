import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProtectedRoutingModule } from './protected-routing.module';

import { ComprasComponent } from './components/compras/compras.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { DefaultComponent } from './components/default/default.component';
import { PublicarProductoComponent } from './components/publicar-producto/publicar-producto.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ControlusuariosComponent } from './components/controlusuarios/controlusuarios.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MisProductosComponent } from './components/mis-productos/mis-productos.component';
import { OrdenarPipe } from '../marketplace/pipes/ordenar.pipe';
import { MarketplaceModule } from '../marketplace/marketplace.module';




@NgModule({
  declarations: [
    DashboardComponent,
    PerfilComponent,
    ComprasComponent,
    VentasComponent,
    CarritoComponent,
    DefaultComponent,
    PublicarProductoComponent,
    CategoriasComponent,
    ControlusuariosComponent,
    MisProductosComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MarketplaceModule
  ]
})
export class ProtectedModule { }
