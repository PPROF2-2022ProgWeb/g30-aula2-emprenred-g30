import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarketplaceService } from '../../services/marketplace.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  categoria: String = ""; 

  constructor(private activatedRoute : ActivatedRoute,
              private marketplaceService : MarketplaceService) { }



  ngOnInit(): void {

    this.marketplaceService.listarProductos();
  


}
}
