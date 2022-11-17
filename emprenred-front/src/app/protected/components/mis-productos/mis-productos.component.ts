import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto, TipoProducto } from 'src/app/marketplace/interfaces/producto.interface';
import { MarketplaceService } from 'src/app/marketplace/services/marketplace.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
  styleUrls: ['./mis-productos.component.scss']
})
export class MisProductosComponent implements OnInit {

misproductos: Producto[];
filtro = ''
getProducto : Producto = {
  nombre: '',
  descripcion: '',
  id: 0,
  precio: 0,
  stock: 0,
  tipoProducto: {id_TipoProducto:0,descripcion:''},
  vendedor: {apellido:'',fechaDeBaja:'',fechaNac: null, id:0,localidad: '', nombre: ''}
}
display: boolean = false;
displayImagen: boolean = false;
categorias: TipoProducto[];

categoria : number;
idUsuario: number = +localStorage.getItem('id'); 
idImagen: number; 

imagen: string  = '';
fileName = '';

  constructor(private marketplaceService: MarketplaceService,
              private formBuilder : FormBuilder,
              private http: HttpClient) { }

              modificarProducto: FormGroup = this.formBuilder.group({

                'nombre': ['', [Validators.required, Validators.minLength(3)] ],
                'descripcion': ['', [Validators.required, Validators.minLength(3)] ],
                'id_tipo_producto': [, [] ],
                'precio':['', [Validators.required, Validators.minLength(8)] ],
                'stock':['', [Validators.required, Validators.minLength(8)] ],
                'imagen':['']
                })

  
  ngOnInit(): void {

    this.marketplaceService.getMyProducts(this.idUsuario).subscribe((misproductos)=>
    {
     this.misproductos = misproductos;
    }),(err) =>{
      alert('ERROR AL RECUPERAR TUS PRODUCTOS')
    }

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

  productoSeleccionado(id:number) {

    this.marketplaceService.getProducto(id).subscribe((producto)=>{

      this.getProducto = producto
      this.categoria = producto.tipoProducto.id_TipoProducto
  
      this.display = true
    }),(err) =>{

      alert('ERROR AL CONECTAR AL BACK')

    }

  }

enviar(){

  //si dejan algun campo en blanco, reemplazar por valor anterior

  if(this.modificarProducto.controls['id_tipo_producto'].value === null){
    this.modificarProducto.controls['id_tipo_producto'].setValue(this.categoria)    
}

if(this.modificarProducto.controls['nombre'].value === null || ''){
  this.modificarProducto.controls['nombre'].setValue(this.getProducto.nombre)    
}

if(this.modificarProducto.controls['descripcion'].value === null || ''){
  this.modificarProducto.controls['descripcion'].setValue(this.getProducto.descripcion)    
}

if(this.modificarProducto.controls['precio'].value === null || 0){
  this.modificarProducto.controls['precio'].setValue(this.getProducto.precio)    
}

if(this.modificarProducto.controls['imagen'].value == "") {
  this.modificarProducto.controls['imagen'].setValue(this.getProducto.imagen)   
}

this.marketplaceService.updateProduct(this.getProducto.id, this.modificarProducto.value).subscribe((producto)=>{

  console.log(producto)

  Swal.fire({
    icon: 'success',
    position: 'top-end',
    title: 'Producto Actualizado',
    text: 'Recargando lista....',
    showConfirmButton: false,
    timer: 2000
  })
 this.display = false
 setTimeout(function(){
  window.location.reload();
}, 2100);


}),(err)=>{
alert('error')
}

}


cambiarImagen( id:number, imagen:string){
  this.idImagen = id; 
  this.displayImagen = true;
  this.imagen = imagen; 
  

}



//ACTUALIZAR IMAGEN


onFileSelected(event) {

  const file:File = event.target.files[0];

  if (file) {

      this.fileName = file.name;
    
      const headers = new HttpHeaders()
      .set('Authorization',localStorage.getItem('token') || '');
      
      const formData = new FormData();

      formData.append("file", file);

      const upload$ = this.http.put(`http://localhost:8080/api/productos/${this.idImagen}/file`, formData, {headers});

      upload$.subscribe( (upload) => {

       this.displayImagen = false;
       Swal.fire({
        icon: 'success',
        position: 'top-end',
        title: 'Imagen Actualizada',
        text: 'Recargando lista....',
        showConfirmButton: false,
        timer: 2000
      })
     this.display = false
     setTimeout(function(){
      window.location.reload();
    }, 2100);
    
       
      }, (err) => {
  
        Swal.fire({
          icon: 'error',
          title: 'Error al Subir Imagen',
          text: err.message
        })
        console.log("error")
        console.log(err.toString())
      })
  }
}

eliminarProducto(id:number, nombre:string) {


  Swal.fire({
    title: 'Eliminar Producto',
    text: "Confirma la eliminación del producto "+ nombre +"?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar',
    cancelButtonText: 'No, mantener'
  }).then((result) => {
    if (result.isConfirmed) {
     

      this.marketplaceService.eliminarProducto(id).subscribe(()=>{
        Swal.fire({
          icon: 'error',
          title: 'Producto Eliminado',
          text: 'El producto ' + nombre +' ha sido eliminado'
        })
      
      },(err)=>{
      
      alert('Error del servidor')
      
      })


    }
  })





}

}
