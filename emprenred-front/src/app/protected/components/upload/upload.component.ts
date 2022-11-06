import { HttpClient, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadService } from 'src/app/marketplace/services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  id= 1;

  fileInfos: Observable<any>;

  constructor(private uploadService: UploadService,
   private http: HttpClient) { }

  ngOnInit(): void {


  }

  fileName = '';



  onFileSelected(event) {

      const file:File = event.target.files[0];

      if (file) {

          this.fileName = file.name;

          const headers = new HttpHeaders()
          .set('Authorization',localStorage.getItem('token') || '');
          
          const formData = new FormData();

          formData.append("file", file);

          const upload$ = this.http.put("http://localhost:8080/api/productos/1/file", formData, {headers});

          upload$.subscribe();
      }
  }
}





