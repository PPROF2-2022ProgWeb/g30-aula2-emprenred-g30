import { Component, OnInit } from '@angular/core';
import { TipoProducto } from 'src/app/marketplace/interfaces/producto.interface';
import { MarketplaceService } from 'src/app/marketplace/services/marketplace.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  idCategoria: number;

  categorias: TipoProducto[];
  nombreCategoria: string;

  constructor(private marketplaceService: MarketplaceService) { }

  ngOnInit(): void {

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

  nothing(){
    console.log('nada pues')
  }

  display: boolean = false;

  showDialog() {
      this.display = true;
  }

  modificarCategoria(id: number, nombre: string){
  
this.idCategoria = id; 
this.nombreCategoria = nombre; 

this.showDialog()

}
}
