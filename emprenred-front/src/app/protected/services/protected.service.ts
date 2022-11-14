import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ProtectedService {

  baseUrl = "http://localhost:8080"

  constructor(private http: HttpClient) { }


  getUser(id:number): Observable<User>{
   
    const url = `${ this.baseUrl}/${id}`;
    const headers = new HttpHeaders()
    .set('Authorization',localStorage.getItem('token') || '');
   return this.http.get<User>(url, {headers})
  
  
  }



}
