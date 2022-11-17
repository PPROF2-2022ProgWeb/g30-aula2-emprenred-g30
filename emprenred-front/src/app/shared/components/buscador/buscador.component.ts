import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  termino: string = "";

  buscar(){

    this.onEnter.emit(this.termino); // Emitimos el evento de salida

    if(this.termino===''||undefined) { 
      //manda un espacio y trae todos los productos
      window.location.replace("/productos/busqueda/%20")

    } else {
            
          
    window.location.replace("/productos/busqueda/"+this.termino);  
    }
  
  }
}
