import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Usuario } from 'src/app/models/usuario.model';
import { HeaderComponent } from '../header/header.component';
import { Tecnica } from 'src/app/models/tecnica.model';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  login: boolean = false;
  usuarios: Usuario[];
  usuario: Usuario;
  id: number;
  cargado: boolean = false;
  nombre:string;
  userName:string;
  tecnicas: Tecnica[];
  productos: Producto[];

  constructor(
    public router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.leer();
    //console.log(localStorage.getItem("log"));
    if(localStorage.getItem("log") == "true"){
      this.login=true;
    }
    //console.log(localStorage.getItem("nombre"));
    //console.log(localStorage.getItem("userName"));
    
    this.nombre = localStorage.getItem("nombre");
    this.userName = localStorage.getItem("userName");  
    
  }
  leer() {
    this.apiService.readUsuario().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
      //console.log(this.usuarios);
    });
    this.apiService.readTecnicas().subscribe((tecnicas: Tecnica[]) => {
      this.tecnicas = tecnicas;
    });
    this.apiService.readProducto().subscribe((producto: Producto[]) => {
      this.productos = producto;
    });
  }
  irProductos(producto){
    console.log(producto);
    this.router.navigate(['/buscar-por-producto'],{queryParams:{'producto': producto}})
  }
  irTecnicas(tecnica){
    this.router.navigate(['/entrada'],{queryParams:{tecnica}})
  }

}
