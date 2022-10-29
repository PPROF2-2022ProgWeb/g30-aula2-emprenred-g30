import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':categoria',
        component: ProductosComponent
      }, 
      {
        path: ':categoria/:producto',
        component: ProductoComponent
      },
      {
        path: '**',
        component: ProductosComponent
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MarketplaceRoutingModule { }