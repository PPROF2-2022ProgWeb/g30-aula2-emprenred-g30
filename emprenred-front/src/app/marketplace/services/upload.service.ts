import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

baseUrl = 'http://localhost:8080/api'

  constructor(private http: HttpClient) {}

  upload(file: File, id: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    const headers = new HttpHeaders()
          .set('Authorization',localStorage.getItem('token') || '');
    const req = new HttpRequest('PUT', `${this.baseUrl}/productos/${id}/file`, formData, {
      reportProgress: true,
      responseType: 'json',
      headers: headers
    }, );

    return this.http.request(req);
  }


}
