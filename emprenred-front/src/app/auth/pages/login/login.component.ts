import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  formularioLogin: FormGroup = this.formBuilder.group({

    'username': ['', [Validators.required, Validators.minLength(5), Validators.email] ],
    'password': ['', [Validators.required, Validators.minLength(8)] ]

  })
  
  

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void {
  }


  guardar(){

    if(this.formularioLogin.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Error de Inicio de Sesión',
        text: 'Revise los campos, hay errores'
      })
    }else{
      this.logueo();
      Swal.fire({
        title: 'Ingresado con su usuario...',
        html: 'Porfavor, espere. Le indicaremos cuando hayamos finalizado. ',
        didOpen: () => {
          Swal.showLoading()
        }
      })
    }
    
  }

  logueo(){
    
    const { username, password } = this.formularioLogin.value; 

    this.authService.login(username,password); 


  }



}
