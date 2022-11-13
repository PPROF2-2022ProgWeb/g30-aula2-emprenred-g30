import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { HomeComponent } from './pages/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { FeatureComponent } from './components/feature/feature.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    CategoriasComponent,
    FeatureComponent,
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ],
  exports: [
  NavbarComponent,
  CategoriasComponent,
  FeatureComponent,
  HomeComponent
  ]
})
export class SharedModule { }
