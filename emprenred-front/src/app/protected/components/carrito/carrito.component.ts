import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto, TipoProducto } from '../../../marketplace/interfaces/producto.interface';
import { MarketplaceService } from '../../../marketplace/services/marketplace.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {


  categoria = "";
productos: Producto[];
email = localStorage.getItem('username');

idUsuario:number = +localStorage.getItem('id')
  constructor(private activatedRoute : ActivatedRoute,
             private marketplaceService: MarketplaceService) { }

  ngOnInit(): void {


   this.marketplaceService.consultarCarrito(this.idUsuario).subscribe((carrito)=>{
     
      this.productos = carrito[0].productos;

      console.log(this.productos)

   })  
   

}

total(){
  let sum=0;
  this.productos.forEach(producto => {
    sum += 1 * producto.precio
  });
  return sum;
}
 /*en suma cambiar el 1 por producto cantidad cuando este ok*/ 
}
