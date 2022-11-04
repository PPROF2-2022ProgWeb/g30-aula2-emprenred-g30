import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { ProtectedService } from '../../services/protected.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  idstring = localStorage.getItem('id')!
  id: number = +this.idstring //parseo a number


  usuarioD: User = {
    id: 0,
    nombre: "",
    apellido: "",
    fechaDeBaja: "",
    fechaNac: "",
    localidad: ""
    
    
    }
  constructor(private protectedService: ProtectedService) { }

  ngOnInit(): void {


    this.protectedService.getUser(this.id)
    .subscribe( (usuario) => {
    
      this.usuarioD = usuario; 
      console.log("Query OK");

            console.log(this.usuarioD)
    
     
    }, (err) => {

     
      console.log("error")
    })


  }

}
