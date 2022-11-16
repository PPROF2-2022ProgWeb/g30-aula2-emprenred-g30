import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/marketplace/interfaces/compra.interface';
import { MarketplaceService } from 'src/app/marketplace/services/marketplace.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  compras!: Venta;

  role: string; 
    constructor(private marketplaceService: MarketplaceService) { }
  
    ngOnInit(): void {
    
      this.role = localStorage.getItem('role')
  
    this.listarCompras()
    
    } 
  
  
  listarCompras(){
  
  this.marketplaceService.consultarVentas().subscribe((ventas)=>{
  
  this.compras = ventas; 
  
  
  },(err)=>{
  
  
  })
  
  }
  }
  