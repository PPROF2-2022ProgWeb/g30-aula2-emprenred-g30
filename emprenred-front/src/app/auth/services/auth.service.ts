import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import Swal from 'sweetalert2';
import { LoginResponse } from '../interfaces/login-response.interface';
import { async, catchError, map, Observable, of } from 'rxjs';
import { rol } from '../interfaces/rol.interface';
import { Usuario } from '../interfaces/users.interface';
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

  register(apellido: string, email: string, fechaNac: string, localidad: string, nombre: string, password: string) {



    const url = `${ this.baseUrl}/registro`;
    const body = { apellido,email,fechaNac,localidad,nombre,password};

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
        localStorage.setItem('role', resp.role )
        localStorage.setItem('id', resp.id.toString())
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


getRole():Observable<rol[]>{

  const url = `${this.baseUrl}/valid`;
  const headers = new HttpHeaders()
  .set('Authorization',localStorage.getItem('token') || ''); // o String vacio.

return this.http.get<rol[]>(url, { headers })

}



getUsuarios():Observable<Usuario[]>{

  const url = `${ this.baseUrl}/users`;
  const headers = new HttpHeaders()
  .set('Authorization',localStorage.getItem('token') || ''); // o String vacio.

  return this.http.get<Usuario[]>(url, {headers})
  
}

bajaUsuario(id:number){
  //agrega 'Fecha de baja' 
    const url = `${ this.baseUrl}/users/${id}/delete`;
    const body = '';
    const headers = new HttpHeaders()
    .set('Authorization',localStorage.getItem('token') || ''); // o String vacio.
  
    return this.http.put(url, body, {headers})
  
  }

  actualizarPerfil(id:number, body:any){

    const url = `${ this.baseUrl}/users/${id}`;
    const headers = new HttpHeaders()
    .set('Authorization',localStorage.getItem('token') || ''); // o String vacio.
  
    return this.http.put(url, body, {headers})
  
    }

}
