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

busqueda: string; 

  constructor(private activatedRoute : ActivatedRoute,
             private marketplaceService: MarketplaceService,
             private titleCase: TitleCasePipe) { }

  ngOnInit(): void {
    


    this.activatedRoute.params.subscribe((param) =>{
    
      this.busqueda = (param['params'])

    })  


    this.marketplaceService.listarProductos()
    .subscribe( (productos) => {

      let categoria = this.categoria

    this.activatedRoute.params.subscribe(({categoria})=>{        
      


        this.categoria = categoria;
        console.log(this.categoria)
    
    
    });

      if(this.categoria==undefined && this.busqueda == undefined) {

        this.productos = productos.data; 
        console.log("Query OK"); 
  
        console.log(this.productos)

      } else {

        if(this.categoria!=undefined) {

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
              
            
        } else { 

             
        this.marketplaceService.buscarProducto(this.busqueda).subscribe((productos)=>{

  this.productos = productos.data; 

        }), (err) =>{

          alert('Falla en el motor de Busqueda')
        }

           
        }
      }

    
     
    }, (err) => {

      this.productos= [];
      console.log("error")
    })
  



  

 
  
  

}

  
}
