import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { rol } from 'src/app/auth/interfaces/rol.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DateValidator } from 'src/app/auth/validator/date.validator';
import { MarketplaceService } from 'src/app/marketplace/services/marketplace.service';
import Swal from 'sweetalert2';
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
  apellido: '',
  fechaDeBaja: '',
  fechaNac: '',
  id: 0,
  localidad: '',
  nombre: ''
}
email = localStorage.getItem('username');

actualizarPerfil: FormGroup = this.formBuilder.group({

  'nombre': ['', [Validators.required, Validators.minLength(3)] ],
  'apellido': ['', [Validators.required, Validators.minLength(3)] ],
  'email': ['', [Validators.required, Validators.minLength(3), Validators.email] ],
  'localidad': ['', [Validators.required, Validators.minLength(3)] ],
  'role' : [],
  'fechaNac': [],
})


  constructor(private protectedService : ProtectedService,
              private authService: AuthService,
              private formBuilder: FormBuilder,
              private marketplaceService: MarketplaceService   ) { }

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

    this.actualizarPerfil.get('fechaNac')?.disable();
    this.actualizarPerfil.get('role')?.disable();

  }


  validarBlancos(){

    if(this.actualizarPerfil.controls['role'].value==undefined || ''){
      this.actualizarPerfil.controls['role'].setValue(this.rol.authority)
    }

    if(this.actualizarPerfil.controls['fechaNac'].value==undefined || ''){
      this.actualizarPerfil.controls['fechaNac'].setValue(this.usuario.fechaNac)
    }

    if(this.actualizarPerfil.controls['nombre'].value==undefined|| ''){
      this.actualizarPerfil.controls['nombre'].setValue(this.usuario.nombre)
    }

    if(this.actualizarPerfil.controls['apellido'].value==undefined || ''){
      this.actualizarPerfil.controls['apellido'].setValue(this.usuario.apellido)
    }
    if(this.actualizarPerfil.controls['localidad'].value==undefined || ''){
      this.actualizarPerfil.controls['localidad'].setValue(this.usuario.localidad)
    }

    console.log(this.actualizarPerfil.value)
  }

  perfilActualizar(id:number){

    this.validarBlancos()

    Swal.fire({
      title: 'Actualizar Perfil',
      text: "Confirma sus nuevos datos?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, actualizar',
      cancelButtonText: 'No, dejalos como estaban'
    }).then((result) => {
      if (result.isConfirmed) {
       

        const body = this.actualizarPerfil.value;

        this.authService.actualizarPerfil(id,body).subscribe((resp)=>{
        
        alert('Actualizado OK')
        
        },(err)=>{
        
        alert('Error del servidor')
        })


      }
    })

    
  }

}
