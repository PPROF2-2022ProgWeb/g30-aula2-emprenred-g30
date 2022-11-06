import { Component, OnInit } from '@angular/core';
import { TipoProducto } from 'src/app/marketplace/interfaces/producto.interface';
import { MarketplaceService } from 'src/app/marketplace/services/marketplace.service';

@Component({
  selector: 'app-publicar-producto',
  templateUrl: './publicar-producto.component.html',
  styleUrls: ['./publicar-producto.component.scss']
})
export class PublicarProductoComponent implements OnInit {

  categorias: TipoProducto[] = []
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

}
