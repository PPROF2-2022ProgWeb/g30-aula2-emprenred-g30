import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProtectedRoutingModule } from './protected-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { CarritoComponent } from './components/carrito/carrito.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PerfilComponent,
    ComprasComponent,
    VentasComponent,
    CarritoComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
