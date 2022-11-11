import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/marketplace/interfaces/producto.interface';
import { MarketplaceService } from 'src/app/marketplace/services/marketplace.service';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
  styleUrls: ['./mis-productos.component.scss']
})
export class MisProductosComponent implements OnInit {

misproductos: Producto[];


  constructor(private marketplaceService: MarketplaceService) { }

  ngOnInit(): void {

    this.marketplaceService.getMyProducts(15).subscribe((misproductos)=>
    {

      this.misproductos = misproductos;

    }),(err) =>{

      alert('ERROR AL RECUPERAR TUS PRODUCTOS')
    }


  }

}
