import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {RippleModule} from 'primeng/ripple';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    TabViewModule,
    ButtonModule,
    PanelModule,
    InputNumberModule,
    TableModule,
    DialogModule,
    RippleModule

  ]
})
export class PrimeNgModule { }
