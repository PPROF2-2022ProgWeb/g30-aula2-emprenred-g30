import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    TabViewModule,
    ButtonModule
  ]
})
export class PrimeNgModule { }
