import { Component, OnInit } from '@angular/core';
import { rol } from 'src/app/auth/interfaces/rol.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from '../../interfaces/user.interface';
import { ProtectedService } from '../../services/protected.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  idstring = localStorage.getItem('id')!
  id: number = +this.idstring //parseo a number
  rol: rol = {
    "authority" : "SIN ROL"
  } 


usuario: User = {
id: 0,
nombre: "",
apellido: "",
fechaDeBaja: "",
fechaNac: "",
localidad: ""


}

email = localStorage.getItem('username');

  constructor(private protectedService : ProtectedService,
              private authService: AuthService           ) { }

  ngOnInit(): void {

    this.protectedService.getUser(this.id)
    .subscribe( (usuario) => {
    
      this.usuario = usuario; 
      console.log("Query OK");

            console.log(this.usuario)
    
     
    }, (err) => {

     
      console.log("error")
    })
  
    this.authService.getRole().subscribe((rol => {

      this.rol.authority = rol[0].authority
      console.log(this.rol.authority)

    }))


  }

  

}
