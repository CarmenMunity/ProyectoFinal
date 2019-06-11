import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Usuario } from 'src/app/models/usuario.model';
import { HeaderComponent } from '../header/header.component';

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

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
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

  }

}
