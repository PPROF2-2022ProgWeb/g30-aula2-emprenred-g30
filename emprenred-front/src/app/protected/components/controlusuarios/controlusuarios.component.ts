import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/auth/interfaces/users.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MarketplaceService } from 'src/app/marketplace/services/marketplace.service';

@Component({
  selector: 'app-controlusuarios',
  templateUrl: './controlusuarios.component.html',
  styleUrls: ['./controlusuarios.component.scss']
})
export class ControlusuariosComponent implements OnInit {

usuarios : Usuario[];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  this.getUsuarios()


  }


getUsuarios() {

this.authService.getUsuarios().subscribe((usuarios)=>{

  this.usuarios = usuarios; 
  console.log(usuarios)

}), (err) =>{


  console.log('error del get usuarios')

}





}

}
