import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoProducto } from 'src/app/marketplace/interfaces/producto.interface';
import { MarketplaceService } from 'src/app/marketplace/services/marketplace.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  idCategoria: number;

  categorias: TipoProducto[];
  nombreCategoria: string;

  constructor(private marketplaceService: MarketplaceService,
             private formBuilder: FormBuilder) { }


cambioCategoria: FormGroup = this.formBuilder.group
({ 'descripcion': ['', [Validators.required, Validators.minLength(3)] ] })

nuevaCategoria: FormGroup = this.formBuilder.group
({ 'descripcion': ['', [Validators.required, Validators.minLength(3)] ] })

  ngOnInit(): void {

    this.marketplaceService.getCategorias()
    .subscribe( (categorias) => {
    
      this.categorias = categorias;
      console.log("Query OK"); 

      console.log(this.categorias)
    
     
    }, (err) => {

      this.categorias= [];
      console.log("error")
    })
  




  }

  nothing(){
    console.log('nada pues')
  }

  display: boolean = false;

  showDialog() {
      this.display = true;
  }

  modificarCategoria(id: number, nombre: string){
  
this.idCategoria = id; 
this.nombreCategoria = nombre; 

this.showDialog()

}

enviar(){
let categoriaNombre = this.cambioCategoria.controls['descripcion'].value

this.marketplaceService.modificarCategoria(this.idCategoria, categoriaNombre)
.subscribe( (categoria) => {
    
  Swal.fire({
    icon: 'success',
    position: 'top-end',
    title: 'Categoria Actualizada',
    text: 'Su categoria ha sido actualizada a : '+categoriaNombre,
    showConfirmButton: false,
    timer: 2000
  })
 this.display = false
 setTimeout(function(){
  window.location.reload();
}, 2100);

 
}, (err) => {

 
})



}

subirCategoria(){

this.marketplaceService.putCategoria(this.nuevaCategoria.controls['descripcion'].value)
.subscribe( (categoria) => {
    
  Swal.fire({
    icon: 'success',
    position: 'top-end',
    title: 'Categoria Actualizada',
    text: 'categoria lista',
    showConfirmButton: false,
    timer: 2000
  })
 this.display = false
 setTimeout(function(){
  window.location.reload();
}, 2100);

 
}, (err) => {

 alert('Error de conexion con SERVIDOR - Reclamele a CELE')
})

}

delete(id:number, nombreCat: string){
console.log(id)
  Swal.fire({
    title: 'Desea eliminar la categoría '+ nombreCat+'?',
  
    showDenyButton: true,
    confirmButtonText: 'Eliminar Categoría',
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.marketplaceService.deleteCategoria(id).subscribe((resp) => {

        Swal.fire({
          icon: 'success',
          position: 'top-end',
          title: 'Categoria Eliminada',
          text: 'Eliminada con éxito',
          showConfirmButton: false,
          timer: 2000
        })

         setTimeout(function(){
  window.location.reload();
}, 2100);
      
       })
  
    } else if (result.isDenied) {
      Swal.fire('Los cambios no han sido guardados', '', 'info')
    }
  })
 
 

}

}
