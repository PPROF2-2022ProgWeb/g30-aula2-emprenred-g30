import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoCreado, TipoProducto } from 'src/app/marketplace/interfaces/producto.interface';
import { MarketplaceService } from 'src/app/marketplace/services/marketplace.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-publicar-producto',
  templateUrl: './publicar-producto.component.html',
  styleUrls: ['./publicar-producto.component.scss']
})
export class PublicarProductoComponent implements OnInit {
  fileName = '';
  idNuevoProducto = 0;
  productoCreado: ProductoCreado;
  

  nuevoProducto: FormGroup = this.formBuilder.group({

    'nombre': ['', [Validators.required, Validators.minLength(3)] ],
    'descripcion': ['', [Validators.required, Validators.minLength(3)] ],
    'id_tipo_producto': ['', [] ],
    'precio':['', [Validators.required, Validators.minLength(8)] ],
    'stock':['', [Validators.required, Validators.minLength(8)] ]


  })

  categorias: TipoProducto[] = []

  constructor(private marketplaceService: MarketplaceService,
              private http: HttpClient,
              private formBuilder: FormBuilder) { }

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

  onFileSelected(event) {

      const file:File = event.target.files[0];

      if (file) {

          this.fileName = file.name;
          const idNuevoProducto = this.idNuevoProducto
          const headers = new HttpHeaders()
          .set('Authorization',localStorage.getItem('token') || '');
          
          const formData = new FormData();

          formData.append("file", file);

          const upload$ = this.http.put(`http://localhost:8080/api/productos/${idNuevoProducto}/file`, formData, {headers});

          upload$.subscribe( (upload) => {
    
            Swal.fire({
              icon: 'success',
              title: 'Subida de Imagen Exitosa',
              showDenyButton: true,
              confirmButtonText: 'Ver mis Productos',
              denyButtonText: `Crear Otro Producto Más`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                
                  window.location.href = 'http://localhost:4200'; 
                  //TODO : cambiar luego a /misProductos
              
                
              } else if (result.isDenied) {
                window.location.reload()
              }
            })
           
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

  guardar(){

    const { nombre, descripcion, id_tipo_producto, precio, stock } = this.nuevoProducto.value
   this.marketplaceService.enviarProducto(nombre,descripcion,id_tipo_producto,precio,stock)
   .subscribe(resp => {
   
    this.productoCreado = resp; 
     this.idNuevoProducto = resp.id 
    console.log(this.idNuevoProducto)
    
   // QUE DEVUELVA EL PRODUCTO CREADO Y GUARDAR EL ID EN VARIABLE, ASI 
   //DESBLOQUEA EL FILE UPLOAD Y MANDA EL ID. 
     
   //Pasale los authorities cheeeee

   },err => {

     Swal.fire({
       icon: 'error',
       title: 'Error del Servidor.',
       text: err.error.message,
       footer: "Intente nuevamente"
     })
   })

  }

  publicar(){
    console.log( this.nuevoProducto.value);
  }
}
