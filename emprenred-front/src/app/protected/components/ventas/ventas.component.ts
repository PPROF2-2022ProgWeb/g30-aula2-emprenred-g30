import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/marketplace/interfaces/compra.interface';
import { MarketplaceService } from 'src/app/marketplace/services/marketplace.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  compras!: Venta;

  role: string; 
    constructor(private marketplaceService: MarketplaceService) { }
  
    ngOnInit(): void {
    
      this.role = localStorage.getItem('role')
  
    this.listarCompras()
    
    } 
  
  
  listarCompras(){
  
  this.marketplaceService.consultarVentas().subscribe((ventas)=>{
  
  this.compras = ventas; 
  
  
  },(err)=>{
  
  
  })
  
  }

  depurarVenta(id: number, estado: string){


    if(estado==='CANCELADO') {

      Swal.fire({
        title: 'Cancelar la Venta',
        text: "Cancelará su venta, está seguro?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, cancelar venta',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
  

          this.marketplaceService.depurarVenta(id,estado).subscribe((resp)=> {

            Swal.fire('Venta cancelada con exito.')

          },(err)=>{
          
            Swal.fire('Error del servidor')
          
          })

        }
      })

    }

    if(estado==='PAGADO'){

      Swal.fire({
        title: 'Confirmar Pago',
        text: "Marcará la venta como PAGADA, está seguro?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
  

          this.marketplaceService.depurarVenta(id,estado).subscribe((resp)=> {

            Swal.fire('Actualización exitosa .')

          },(err)=>{
          
            Swal.fire('Error del servidor')
          
          })

        }
      })

    }



    



  }


  }
  