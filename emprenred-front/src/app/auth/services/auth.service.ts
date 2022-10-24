import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import Swal from 'sweetalert2';
import { LoginResponse } from '../interfaces/login-response.interface';
import { async, catchError, map, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {



  // URL DEL BACK 

private baseUrl: string = "http://localhost:8080"; 
  private _user: { username: any; } | undefined;




           // Se inyecta HttpClient
  constructor(private http: HttpClient) { }


  // REGISTRO

  register(nombre: string ,apellido: string ,email: string ,provincia: string ,fechaNac: Date ,contraseña:string ,contraseña2:string ) {

   
    const url = `${ this.baseUrl}/registro`;
    const body = { nombre,apellido,email,provincia,contraseña,fechaNac,contraseña2};

   return this.http.post(url, body).subscribe(resp => {
    Swal.fire({
      icon: 'success',
      title: 'Registro Exitoso',
      text: 'Se ha registrado con éxito',
      confirmButtonText: 'ir al Login'
    }).then(
      function() {window.location.href = '/auth/login';
    }
    )
      

    },err => {

      Swal.fire({
        icon: 'error',
        title: 'Error al Registrarse',
        text: err.error.message,
        footer: "Intente nuevamente"
      })
    })
  


    }

      // LOGUEO

      login(username: string , password:string ){

   
        const url = `${ this.baseUrl}/login`;
        const body = { username , password };
    
       return this.http.post<LoginResponse>(url, body).subscribe(resp => {
       
        localStorage.setItem('token', 'Bearer '+resp.token)
        localStorage.setItem('username', resp.username)
        Swal.fire({
          icon: 'success',
          title: 'Ingreso Exitoso',
          text: '¡Bienvenid@!',
          confirmButtonText: 'ir al Dashboard'
        }).then(
         
          function() {window.location.href = '/dashboard';
        }
        )
          
    
        },err => {
    
          Swal.fire({
            icon: 'error',
            title: 'Error al Loguearse',
            text: err.error.message,
            footer: "Intente nuevamente"
          })
        })
      
    
    
        }


        //Validación de Token

        validarToken(): Observable<boolean> {

          let ok = true;

          const url = `${this.baseUrl}/valid`;
          const headers = new HttpHeaders()
          .set('Authorization',localStorage.getItem('token') || ''); // o String vacio. 
      
    return this.http.get(url, { headers })
    .pipe(
      map( () => {

        return true
      }), catchError (err => of(false))
    );

      
       
       
    
}


}
