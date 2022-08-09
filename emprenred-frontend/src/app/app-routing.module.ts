import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import {LoginComponentComponent} from "./login-component/login-component.component";
import {DefaultComponent} from "./default/default.component"
import {RegisterComponent} from "./register/register.component";
const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent
  },
  {
    path: 'login',
    component: LoginComponentComponent
  },
  {
    path:'default',
    component : DefaultComponent
  }
  ,
  {
    path:'register',
    component : RegisterComponent
  }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
