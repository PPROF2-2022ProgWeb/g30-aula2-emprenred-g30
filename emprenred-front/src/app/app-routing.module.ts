import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';


import { HomeComponent } from './shared/pages/home/home.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
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
}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
