import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/auth/interfaces/users.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MarketplaceService } from 'src/app/marketplace/services/marketplace.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-controlusuarios',
  templateUrl: './controlusuarios.component.html',
  styleUrls: ['./controlusuarios.component.scss']
})
export class ControlusuariosComponent implements OnInit {

  usuarioSelect: Usuario = {

    id:0,
    nombre:'',
    apellido:'',
    email:'',
    fechaNac:'',
    localidad:'',
    role:''
  }

  dialogoRol: boolean = false; 
usuarios : Usuario[];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  this.getUsuarios()


  }


getUsuarios() {

this.authService.getUsuarios().subscribe((usuarios)=>{

  this.usuarios = usuarios; 
  console.log(usuarios)

}, (err) =>{


  console.log('error del get usuarios')

})

}


bajaUsuario(id:number) {

  Swal.fire({
    title: 'Baja de Usuario',
    text: "Dará de baja el Usuario, ¿Continuar?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, dar de baja',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.isConfirmed) {
     
      this.authService.bajaUsuario(id).subscribe((baja)=>{

        Swal.fire({
          icon: 'success',
          title: 'Usuario dado de baja',
          text: 'El usuario ha sido dado de baja'
        })

        this.authService.getUsuarios().subscribe((usuarios)=>{

          this.usuarios = usuarios; 
          console.log(usuarios)
        
        }, (err) =>{
        
        
          console.log('error del get usuarios')
        
        })
      },(err)=>{
      
    alert('error del servidor') })
    
     
    }
  })
}

setearUsuario(id:number, nombre:string, apellido: string, email: string, fechaNac: string, localidad: string, role: string){

  this.usuarioSelect = {
    id,
     nombre,
     apellido,
     email,
     fechaNac,
     localidad,
     role
  }

}

cambiarRol(id: number, role: string){


  this.dialogoRol=false; 

  Swal.fire({
    title: 'Modificación de Rol',
    text: "Cambiará el rol del usuario "+this.usuarioSelect.email+" a "+role+", ¿Continuar?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, cambiar',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.isConfirmed) {

      this.usuarioSelect.role = role; 

      this.authService.actualizarPerfil(id,this.usuarioSelect).subscribe((perfil)=>{

       
      
        Swal.fire({
          icon: 'success',
          title: 'Usuario Actualizado',
          text: 'El usuario ha sido actualizado a rol '+role
        })
      
      },(err)=>{
      
        alert('error del servidor')
      
      })

      
    }
  })

 
}
}





