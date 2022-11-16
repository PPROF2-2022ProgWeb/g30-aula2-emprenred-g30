import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';
import { Producto, ProductosCarrito } from '../../interfaces/producto.interface';
import { MarketplaceService } from '../../services/marketplace.service';
@Component({
  selector: 'app-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.scss']
})
export class TablaProductoComponent implements OnInit {

role: string;
logueado: boolean = false;
productos: Producto[];
categoria = "";
idProducto = 0;
stock= '';
productosCarrito: ProductosCarrito[]
encontrado: ProductosCarrito
producto: Producto;
isLoading: boolean = false;




  constructor(private activatedRoute: ActivatedRoute,
              private marketplaceService: MarketplaceService,
              private authService: AuthService) { }

  ngOnInit(): void {

    this.role = localStorage.getItem('role')
    this.authService.validarToken().subscribe((resp)=>{

      if(resp)  {
        this.logueado = true; 
     

        console.log(this.logueado)
      }}, (err)=>{
        this.logueado = false
        console.log(this.logueado)
      });

    this.activatedRoute.params.subscribe(({stock})=>{
   
      
      if(stock != ''){
        this.stock = stock; 
      }
  
    });
    this.activatedRoute.params.subscribe(({categoria})=>{
   
      
      if(categoria != ''){
        this.categoria = categoria; 
      }
  
    });

    this.activatedRoute.params.subscribe(({producto})=>{
   
      
      if(producto != ''){
        this.idProducto = producto;
      }
  
    });

    this.marketplaceService.getProducto(this.idProducto)
    .subscribe( (producto) => {
      this.producto = producto;
    
      console.log("Query OK");
      console.log(producto)
    
     
    }, (err) => {

   
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

      if (result.isConfirmed) {
        
        window.location.href = "/auth/login";

      } else if (result.isDenied) {
       
        window.location.href = "/auth/register";

      }
    })


  }
  
}
