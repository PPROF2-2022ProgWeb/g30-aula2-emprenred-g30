import { TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/producto.interface';
import { MarketplaceService } from '../../services/marketplace.service';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss'],
  providers: [TitleCasePipe]
})
export class TablaProductosComponent implements OnInit {


  filtro: string = '';
  isMenuOpened: boolean = false;

  filtromenu() {
    this.isMenuOpened = !this.isMenuOpened;
 }


  categoria: string;
productos: Producto[] = [];
productosFilter: Producto[] = [];

  constructor(private activatedRoute : ActivatedRoute,
             private marketplaceService: MarketplaceService,
             private titleCase: TitleCasePipe) { }

  ngOnInit(): void {
    





    this.marketplaceService.listarProductos()
    .subscribe( (productos) => {
    
      
    this.activatedRoute.params.subscribe(({categoria})=>{
   
      
      if(categoria != ''){
        this.categoria = categoria;  
      }
  
      console.log(this.categoria)
    });

      if(this.categoria==undefined) {

        this.productos = productos.data; 
        console.log("Query OK"); 
  
        console.log(this.productos)

      } else {

        console.log('por aca padre')

        let categoria = this.categoria
      this.productos = productos.data.filter(function (producto)
      {
        
      return producto.tipoProducto.descripcion ===  categoria
      }

      );
            if(this.productos.length === 0)  {
            
              categoria = this.titleCase.transform(this.categoria)  
              this.productos = productos.data.filter(function (producto)
              {
                
              return producto.tipoProducto.descripcion ===  categoria
              }
        
              );

            }
           
      }

    
     
    }, (err) => {

      this.productos= [];
      console.log("error")
    })
  



  

 
  
  

}

  
}
