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



categoria = "";
idProducto = 0;

producto: Producto = {
  id: 0,
  catalogoID: 0,
  descripcion: "",
  fechaDeBaja: '2012-04-23T18:25:43.511Z',
  idTipoProducto: 1,
  categoria: "GENERAL",
  imagen: "",
  nombre: "",
  precio: 0,
  stock: 0

};

  constructor(private activatedRoute: ActivatedRoute,
              private marketplaceService: MarketplaceService) { }

  ngOnInit(): void {



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
      this.producto.categoria = "GENERAL"
      console.log("Query OK");
      console.log(producto)
    
     
    }, (err) => {

   
      console.log("error")
    })


  
  }

  
}
