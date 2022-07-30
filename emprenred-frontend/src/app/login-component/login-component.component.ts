import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']

})
export class LoginComponentComponent implements OnInit {
  scriptsValidacion: HTMLScriptElement;
  constructor() {
   this.scriptsValidacion = document.createElement('script');
      this.scriptsValidacion.type = 'text/javascript';
      this.scriptsValidacion.src = 'assets/static/js/registro/funcionesGrupo4.js';
      document.body.appendChild(this.scriptsValidacion);

  }

  ngOnInit(): void {
  }

}
