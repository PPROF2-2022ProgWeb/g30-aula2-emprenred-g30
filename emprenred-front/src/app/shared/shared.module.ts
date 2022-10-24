import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { HomeComponent } from './pages/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { FeatureComponent } from './components/feature/feature.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    CategoriasComponent,
    FeatureComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
  NavbarComponent,
  CategoriasComponent,
  FeatureComponent,
  HomeComponent
  ]
})
export class SharedModule { }
