import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
