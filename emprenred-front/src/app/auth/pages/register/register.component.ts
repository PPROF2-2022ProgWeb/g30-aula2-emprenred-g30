import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ok } from 'assert';
import { catchError, tap } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { DateValidator } from '../../validator/date.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})



export class RegisterComponent {

  formularioRegistro: FormGroup = this.formBuilder.group({

    'nombre': ['', [Validators.required, Validators.minLength(3)] ],
    'apellido': ['', [Validators.required, Validators.minLength(3)] ],
    'email': ['', [Validators.required, Validators.minLength(3), Validators.email] ],
    'provincia': ['', [Validators.required, Validators.minLength(3)] ],
    'fechaNac': ['', [Validators.required, DateValidator.LessThanToday] ],
    'contraseña':['', [Validators.required, Validators.minLength(8)] ],
    'contraseña2':['', [Validators.required, Validators.minLength(8)] ]


  })

  constructor( private formBuilder: FormBuilder,
              private authService: AuthService ) {}


provincias: string[] = [
  'Buenos Aires',
    "Buenos Aires Capital", 
    "Catamarca", "Chaco",
     "Chubut", "Cordoba",
      "Corrientes", "Entre Rios",
       "Formosa", "Jujuy", 
       "La Pampa", "La Rioja", 
       "Mendoza", "Misiones",
        "Neuquen", "Rio Negro", 
        "Salta", "San Juan",
         "San Luis", "Santa Cruz", 
         "Santa Fe", "Santiago del Estero",
          "Tierra del Fuego", "Tucuman"
 ] 



campoEsValido(campo:string){

  return this.formularioRegistro.controls[campo].errors &&  this.formularioRegistro.controls[campo].touched

}

guardar(){

  if(this.formularioRegistro.invalid || this.repitaPassword()){
    Swal.fire({
      icon: 'error',
      title: 'Error de Inicio de Sesión',
      text: 'Revise los campos, hay errores'
    })
  }else{
    this.registro();
    Swal.fire({
      title: 'Registrando el usuario',
      html: 'Porfavor, espere. Le indicaremos cuando hayamos finalizado. ',
      didOpen: () => {
        Swal.showLoading()
      }
    })
  }
  
}

registro() {

  const {nombre,apellido,email,provincia,fechaNac,contraseña,contraseña2} = this.formularioRegistro.value;
  console.log(nombre)
  this.authService.register(nombre,apellido,email,provincia,fechaNac,contraseña,contraseña2)

}
repitaPassword() {

if(this.formularioRegistro.value["contraseña"] != this.formularioRegistro.value["contraseña2"]  ){
 return true
} else {
  return false
}

}

}

