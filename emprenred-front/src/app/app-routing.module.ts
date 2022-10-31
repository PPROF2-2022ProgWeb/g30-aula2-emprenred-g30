import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';


import { HomeComponent } from './shared/pages/home/home.component';
import { ProductosComponent } from './marketplace/pages/productos/productos.component';
import { ProductoComponent } from './marketplace/pages/producto/producto.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
 },
 {
  path: 'productos',
  loadChildren: () => import('./marketplace/marketplace.module').then(m => m.MarketplaceModule)
},
 {
  path: 'dashboard',
  loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule),
  canActivate: [
   ValidarTokenGuard
  ]
    
},
 { 
  path: '',
  component: HomeComponent
},
{path: 'productos',component:ProductosComponent},
{path: 'producto',component:ProductoComponent}
];


@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
