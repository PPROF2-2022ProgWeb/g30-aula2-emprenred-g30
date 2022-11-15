import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Compra } from 'src/app/marketplace/interfaces/compra.interface';
import Swal from 'sweetalert2';
import { Producto, ProductosCarrito, TipoProducto } from '../../../marketplace/interfaces/producto.interface';
import { MarketplaceService } from '../../../marketplace/services/marketplace.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

role: string; 

isLoading: boolean = false; 


categoria = "";
productos: ProductosCarrito[];
precioCarrito: number;
email = localStorage.getItem('username');
idUsuario:number = +localStorage.getItem('id')
compra: Compra = {

  carritoId: 0,
  paymentType: 'No seleccionado'
}


  constructor(private activatedRoute : ActivatedRoute,
             private marketplaceService: MarketplaceService,
             private formBuilder: FormBuilder) { }



  ngOnInit(): void {

this.role = localStorage.getItem('role')
   this.marketplaceService.consultarCarrito().subscribe((carrito)=>{
     
    this.productos = carrito.productos
    this.precioCarrito = carrito.precio!
    this.compra.carritoId = carrito.id;

   })  
   

}

total(): number{


  let sum=0;
  this.productos.forEach(producto => {
    sum += 1 * producto.producto.precio
  });
  return sum;


}
 /*en suma cambiar el 1 por producto cantidad cuando este ok*/ 



 mp() {

  this.compra.paymentType='MERCADO_PAGO'
  
}
  acordar() {
    this.compra.paymentType='ACORDADO_CON_VENDEDOR'
  }


  borrarProducto(id:number) {

    this.isLoading = true; 
this.marketplaceService.quitarProductoCarrito(id).subscribe((resp)=>{

console.log('producto eliminado')

this.marketplaceService.consultarCarrito().subscribe((carrito)=>{
     
  this.productos = carrito.productos
  this.precioCarrito = carrito.precio!
  this.compra.carritoId = carrito.id;

  this.isLoading = false; 

 })  

    }),(err) =>{

      this.isLoading = false; 
      alert('Error de borrado de producto --- error del servidor: ' + err )
    }

  }


  generarCompra(){ 

    this.marketplaceService.generarCompra(this.compra.carritoId, this.compra.paymentType).subscribe((resp)=>{

    console.log(resp)

    }),(err) =>{

      alert(err)
    }
  

  }

  aumentarProducto(id:number, stock: number, cantidad: number ){ 

    this.isLoading = true; 

    if(stock <= cantidad){
      Swal.fire({
        icon: 'error',
        position: 'top-end',
        title: 'No se pueden agregar más productos',
        text: 'Supera el Stock establecido por el vendedor. ',
        showConfirmButton: false,
        timer: 2000
      })
 this.isLoading = false; 
    }else{

      
    this.marketplaceService.agregarProductoCarrito(id).subscribe((resp)=>{


      //actualizar carrito para cantidad, y restablecer el flag
      this.marketplaceService.consultarCarrito().subscribe((carrito)=>{
     
        this.productos = carrito.productos
        this.precioCarrito = carrito.precio!
        this.compra.carritoId = carrito.id;
      
        this.isLoading = false; 
      
       }) 

      //Mandar un flag 
   
 
    }),(err) =>{

      Swal.fire({
        icon: 'error',
        position: 'top-end',
        title: 'No se pueden agregar más productos',
        text: 'Error del Servidor, intenta mas tarde ',
        showConfirmButton: false,
        timer: 2000
      })
      this.isLoading = false; 
    }


    }

  }

}
