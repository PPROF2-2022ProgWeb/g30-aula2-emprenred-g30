import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/producto.interface';
import { MarketplaceService } from '../../services/marketplace.service';
@Component({
  selector: 'app-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.scss']
})
export class TablaProductoComponent implements OnInit {


productos: Producto[] = [];
categoria = "";
idProducto = 0;
stock= '';

producto: Producto;

  constructor(private activatedRoute: ActivatedRoute,
              private marketplaceService: MarketplaceService) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(({stock})=>{
   
      
      if(stock != ''){
        this.stock = stock; 
      }
  
    });
    this.activatedRoute.params.subscribe(({categoria})=>{
   
      
      if(categoria != ''){
        this.categoria = categoria; 
      }
  
    });

    this.activatedRoute.params.subscribe(({producto})=>{
   
      
      if(producto != ''){
        this.idProducto = producto;
      }
  
    });

    this.marketplaceService.getProducto(this.idProducto)
    .subscribe( (producto) => {
      this.producto = producto;
    
      console.log("Query OK");
      console.log(producto)
    
     
    }, (err) => {

   
      console.log("error")
    })


  
  }

  
}
