import { TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Producto, ProductosCarrito } from '../../interfaces/producto.interface';
import { MarketplaceService } from '../../services/marketplace.service';
import { TipoProducto } from '../../../marketplace/interfaces/producto.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss'],
  providers: [TitleCasePipe]
})
export class TablaProductosComponent implements OnInit {

  isLoading: boolean = false;

  filtro: string = '';
  isMenuOpened: boolean = false;

  filtromenu() {
    this.isMenuOpened = !this.isMenuOpened;
 }

 role: string;
logueado: boolean = false;

categorias: TipoProducto[] = [];
categoria: string;
productos: Producto[];
productosCarrito: ProductosCarrito[];
encontrado: ProductosCarrito;


busqueda: string; 

  constructor(private activatedRoute : ActivatedRoute,
             private marketplaceService: MarketplaceService,
             private titleCase: TitleCasePipe,
             private authService: AuthService,
           ) { }

  ngOnInit(): void {
    

//validando si el usuario esta logueado, es admin, etc

this.role = localStorage.getItem('role')
    this.authService.validarToken().subscribe((resp)=>{

      if(resp)  {
        this.logueado = true; 
     

        console.log(this.logueado)
      }}, (err)=>{
        this.logueado = false
        console.log(this.logueado)
      });





    this.marketplaceService.getCategorias()
    .subscribe( (categorias) => {
    
      this.categorias = categorias;
      console.log("Query OK"); 

      console.log(this.categorias)
    
     
    }, (err) => {

      this.categorias= [];
      console.log("error")
    })


    this.activatedRoute.params.subscribe((param) =>{
    
      this.busqueda = (param['params'])

    })  


    this.marketplaceService.listarProductos()
    .subscribe( (productos) => {

      let categoria = this.categoria

    this.activatedRoute.params.subscribe(({categoria})=>{        
      


        this.categoria = categoria;
        console.log(this.categoria)
    
    
    });

      if(this.categoria==undefined && this.busqueda == undefined) {

        this.productos = productos.data; 
        console.log("Query OK"); 
  
        console.log(this.productos)

      } else {

        if(this.categoria!=undefined) {

          this.productos = productos.data.filter(function (producto)
          {
            
          return producto.tipoProducto.descripcion ===  categoria
          }
    
          );
                if(this.productos.length === 0)  {
                
                  categoria = this.titleCase.transform(this.categoria)  
                  this.productos = productos.data.filter(function (producto)
                  {
                    
                  return producto.tipoProducto.descripcion ===  categoria
                  }
            
                  );
    
                }
              
            
        } else { 

             
        this.marketplaceService.buscarProducto(this.busqueda).subscribe((productos)=>{

  this.productos = productos.data; 

        }), (err) =>{

          alert('Falla en el motor de Busqueda')
        }

           
        }
      }

    
     
    }, (err) => {

      this.productos= [];
      console.log("error")
    })
  



  

 
  
  

}

  
agregarAlCarrito(id:number,nombre:string) {


  this.isLoading=true
  
    this.marketplaceService.agregarProductoCarrito(id).subscribe((resp)=>{
      this.isLoading=false
     Swal.fire({
        icon: 'success',
        position: 'top-end',
        title: 'Producto Agregado al Carrito',
        text: nombre,
        showConfirmButton: false,
        timer: 2000
      })
   
 
    },error =>{
      this.isLoading=false
      console.log(error)
      Swal.fire({
        icon: 'error',
        position: 'top-end',
        title: 'No se puede agregar al carrito',
        text: error.error.message,
        showConfirmButton: false,
        timer: 2000
      })

    }

    )

}


//Para evitar sobre-ventas 
evaluarStock(id:number, nombre:string) {

this.isLoading = true;   
this.marketplaceService.consultarCarrito().subscribe((carrito)=>{

this.productosCarrito = carrito.productos


this.encontrado = this.productosCarrito.find(producto => producto.producto.id === id)


if(this.encontrado!=undefined){
console.log('producto encontrado actualmente en carrito, evaluando stock y cantidad')
  if(this.encontrado.producto.stock<=this.encontrado.cantidad){
        
    //mandar el alert, se pasó el stock 
this.isLoading=false;

    return Swal.fire({
      icon: 'error',
      position: 'top-end',
      title: 'No se puede añadir el producto',
      text:  'Ha sobrepasado la cantidad de stock proporcionada por el vendedor para este producto, revise su carrito',
      showConfirmButton: false,
      timer: 2000
    })


  } else {

    this.isLoading=false;
   //lo tiene en carrito, pero se puede agregar. 
   return this.agregarAlCarrito(id,nombre)

  }


}

//si está undefined, no está en el carrito mandar a agregar el producto
this.agregarAlCarrito(id,nombre)

})

}



noLogueado(){
  Swal.fire({
    title: 'No estás Logueado, tu sesión Caducó, o no estás Registrado',
    showDenyButton: true,
    confirmButtonText: 'Ir al Login',
    denyButtonText: `Registrarme`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      
      window.location.href = "/auth/login";

    } else if (result.isDenied) {
     
      window.location.href = "/auth/register";

    }
  })


}
}
