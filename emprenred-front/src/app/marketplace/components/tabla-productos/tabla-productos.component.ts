import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/producto.interface';
import { MarketplaceService } from '../../services/marketplace.service';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss']
})
export class TablaProductosComponent implements OnInit {


  filtro: string = '';
  isMenuOpened: boolean = false;

  filtromenu() {
    this.isMenuOpened = !this.isMenuOpened;
 }


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

  
}
