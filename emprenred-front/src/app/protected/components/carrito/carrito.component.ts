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

compraEnCurso: boolean = false;
categoria = "";
productos: ProductosCarrito[];
precioCarrito: number;
email = localStorage.getItem('username');
idUsuario:number = +localStorage.getItem('id')


compra: Compra = {

  carritoId: 0,
  paymentType: 'No seleccionado'
}
  linkpagomp: string;
  modalmp: boolean;


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
    sum += producto.cantidad * producto.producto.precio
  });
  return sum;


}




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
    this.compraEnCurso = true; 

    if(this.compra.paymentType === 'MERCADO_PAGO'){

this.marketplaceService.generarCompraMP(this.compra.carritoId, this.compra.paymentType).subscribe((resp)=>{

  this.compraEnCurso = false; 
  this.modalmp = true; 
  this.linkpagomp = resp.initPoint;

}, (err)=>{

  this.compraEnCurso = false; 
 alert('problema en el servidor, intente en otro momento. ')


})



    } else { 

    this.marketplaceService.generarCompra(this.compra.carritoId, this.compra.paymentType).subscribe((resp)=>{

      this.compraEnCurso = false;
      Swal.fire({
        title: 'Compra realizada con éxito',
        text: 'El estado de la misma puede ser revisada en la sección "Mis Compras". El vendedor se pondrá en contacto con vos via email para concretar la venta ',
        showDenyButton: true,
        confirmButtonText: 'Ir a Mis Compras',
        denyButtonText: `Seguir Comprando`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          
          window.location.href = "/dashboard/compras";
    
        } else if (result.isDenied) {
         
          window.location.href = "/";
    
        }
      })

    },(err) =>{

      this.compraEnCurso = false; 
      alert(err)
    }
    )
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
