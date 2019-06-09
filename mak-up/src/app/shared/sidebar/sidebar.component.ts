import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Usuario } from 'src/app/models/usuario.model';

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
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.leer();
    //console.log(localStorage.getItem("log"));
    if(localStorage.getItem("log") == "true"){
      this.login=true;
    }
    setTimeout(() => {
      this.id = parseInt(localStorage.getItem("id"));
      console.log(this.id);
      this.usuarios.forEach((usuario)=>{
        if(this.id == usuario["Id"]){
          this.usuario = usuario;
        }       
      });
    }, 500);
  }
  leer() {
    this.apiService.readUsuario().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
      //console.log(this.usuarios);
    });

  }

}
