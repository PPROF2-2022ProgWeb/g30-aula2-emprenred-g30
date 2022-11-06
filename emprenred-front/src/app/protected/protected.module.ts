import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProtectedRoutingModule } from './protected-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { DefaultComponent } from './components/default/default.component';
import { PublicarProductoComponent } from './components/publicar-producto/publicar-producto.component';
import { UploadComponent } from './components/upload/upload.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    DashboardComponent,
    PerfilComponent,
    ComprasComponent,
    VentasComponent,
    CarritoComponent,
    DefaultComponent,
    PublicarProductoComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ]
})
export class ProtectedModule { }
