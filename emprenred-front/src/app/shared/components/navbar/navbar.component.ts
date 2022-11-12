import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';
import { delay } from 'rxjs';
import { rol } from 'src/app/auth/interfaces/rol.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TipoProducto } from 'src/app/marketplace/interfaces/producto.interface';
import { MarketplaceService } from 'src/app/marketplace/services/marketplace.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  role: rol;


  categorias: TipoProducto[] = [];

    usuario: string = ""
  items!: MenuItem[];
rol: string = localStorage.getItem('role')
  constructor(private marketplaceService: MarketplaceService,
              private authService: AuthService) { }

             
  ngOnInit() {
   
    this.usuario = localStorage.getItem('username')!

    this.authService.getRole().subscribe((rol => {

      console.log( rol[0].authority)
     // this.role.authority=rol[0].authority
      setTimeout(function(){
        localStorage.setItem('role' , rol[0].authority)
     }, 3000);

    }))
    this.marketplaceService.getCategorias()
    .subscribe( (categorias) => {
    
      this.categorias = categorias;
      console.log("Query OK"); 

      console.log(this.categorias)
    
     
    }, (err) => {

      this.categorias= [];
      console.log("error")
    })
  
 


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
