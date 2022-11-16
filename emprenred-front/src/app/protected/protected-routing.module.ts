import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from '../shared/pages/notfound/notfound.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ComprasComponent } from './components/compras/compras.component';
import { ControlusuariosComponent } from './components/controlusuarios/controlusuarios.component';
import { DefaultComponent } from './components/default/default.component';
import { MisProductosComponent } from './components/mis-productos/mis-productos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PublicarProductoComponent } from './components/publicar-producto/publicar-producto.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [

    {

      path: '',
component: DashboardComponent,
      children: [
        {path: '',
      component: DefaultComponent},
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
          path: 'subir-producto',
          component: PublicarProductoComponent
        },
        {
          path: 'categoria',
          component: CategoriasComponent
        },
        {
          path: 'admin/usuarios',
          component: ControlusuariosComponent
        },
        {
          path: 'misproductos',
          component: MisProductosComponent
        },
        { path: '**', pathMatch: 'full', 
        component: NotfoundComponent }
      ]


    }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }