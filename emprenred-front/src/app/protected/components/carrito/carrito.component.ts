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
productos: Producto[] = [];

  constructor(private activatedRoute : ActivatedRoute,
             private marketplaceService: MarketplaceService) { }

  ngOnInit(): void {

    this.marketplaceService.listarProductos()
    .subscribe( (productos) => {
    
      this.productos = productos.data; 
      console.log("Query OK");  

      console.log(this.productos)
    
     
    }, (err) => {

      this.productos= [];
      console.log("error")
    })
  




    this.activatedRoute.params.subscribe(({categoria})=>{
   
      
      if(categoria != ''){
        this.categoria = categoria; 
      }
  
    });
   

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
