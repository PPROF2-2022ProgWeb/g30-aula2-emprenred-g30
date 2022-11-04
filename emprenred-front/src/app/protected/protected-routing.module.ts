import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ComprasComponent } from './components/compras/compras.component';
import { DefaultComponent } from './components/default/default.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [

    {

      path: '',
component: DashboardComponent,
      children: [
        {
          path: 'carrito',
          component: CarritoComponent
        },
        {
          path: 'compras',
          component: ComprasComponent
        },
        {
          path: 'perfil',
          component: PerfilComponent
        },
        {
          path: 'ventas',
          component: VentasComponent
        },
        {
          path: "**",
          component: DefaultComponent
        }
      ]


    }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }