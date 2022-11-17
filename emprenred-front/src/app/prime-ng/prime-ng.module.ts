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
import {BadgeModule} from 'primeng/badge';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message'

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
    RippleModule,
    BadgeModule,
    MessageModule,
    MessagesModule
    
  ]
})
export class PrimeNgModule { }
