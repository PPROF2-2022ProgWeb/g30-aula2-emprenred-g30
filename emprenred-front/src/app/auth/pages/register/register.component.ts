import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { DateValidator } from '../../validator/date.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [DatePipe]
})



export class RegisterComponent {

  formularioRegistro: FormGroup = this.formBuilder.group({

    'nombre': ['', [Validators.required, Validators.minLength(3)] ],
    'apellido': ['', [Validators.required, Validators.minLength(3)] ],
    'email': ['', [Validators.required, Validators.minLength(3), Validators.email] ],
    'localidad': ['', [Validators.required, Validators.minLength(3)] ],
    'fechaNac': ['', [Validators.required, DateValidator.LessThanToday] ],
    'password':['', [Validators.required, Validators.minLength(8)] ],
    'password2':['', [Validators.required, Validators.minLength(8)] ]


  })

  constructor( private formBuilder: FormBuilder,
              private authService: AuthService,
              private datePipe: DatePipe ) {}


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

  //transformar fecha a formato regional (si no en el json llega como yyyy-mm-dd)
 const fechaNac1 = this.datePipe.transform(this.formularioRegistro.get('fechaNac').value, 'dd-MM-yyyy')


  const {apellido,email,fechaNac,localidad,nombre,password} = this.formularioRegistro.value;

  console.log(this.formularioRegistro.value)

  this.authService.register(apellido,email,fechaNac, localidad,nombre,password)

}
repitaPassword() {

if(this.formularioRegistro.value["password"] != this.formularioRegistro.value["password2"]  ){
 return true
} else {
  return false
}

}

}

