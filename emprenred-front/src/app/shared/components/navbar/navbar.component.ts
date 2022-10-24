import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';
import { delay } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    usuario: string = ""
  items!: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
        {
            label: 'File',
            items: [{
                    label: 'New', 
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                {label: 'Open'},
                {label: 'Quit'}
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
            ]
        }
    ];

    this.usuario = localStorage.getItem('username')!
}



cerrarSesion(){

    Swal.fire({
        title: '¿Desea Cerrar su Sesión?',
        showDenyButton: true,
        confirmButtonText: 'Cerrar Sesión',
        denyButtonText: `No Cerrar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            localStorage.clear();
          Swal.fire('Su sesión ha sido cerrada', '', 'success')
          setTimeout(function(){
            window.location.reload();
         }, 2000);
          
        } else if (result.isDenied) {
          Swal.fire('Seguí disfrutando de EmprenRED', '', 'info')
        }
      })


}


}
