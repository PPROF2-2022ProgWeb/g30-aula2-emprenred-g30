import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

   
  constructor() { }

  ngOnInit(): void {
  }

  menuData =  [{
    title : 'Inicio',
    path  : '',
  },
  {
    title : 'Tienda Online',
    path : 'default',
  },
  {
    title : 'Contacto',
    path  : 'default',
  }]

}
