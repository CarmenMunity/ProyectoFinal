import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Producto } from 'src/app/models/producto.model';
import { Categoria } from 'src/app/models/categoria.model';
import { Entrada } from 'src/app/models/entrada.model';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-show-for-pro',
  templateUrl: './show-for-pro.component.html',
  styleUrls: ['./show-for-pro.component.css']
})
export class ShowForProComponent implements OnInit {

  id: number;
  productos: Producto[];
  categorias: Categoria[];
  entradas: Entrada[];
  producto: Producto;
  cargado: boolean = false;
  usuarios: Usuario[];
  usuario: Usuario;
  
  constructor(
    public route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.id=parseInt(this.route.snapshot.queryParamMap.get('producto'));

    this.leer();
    setTimeout(() => {
      //console.log(this.productos);
      this.productos.forEach((producto) => {
        if (producto["Id"] == this.id) {
          this.producto = producto;
        }
      });
      this.cargado = true;
    }, 600);
  }

  leer() {
    this.apiService.entradaPorProducto(this.id).subscribe((entradas: Entrada[]) => {
      this.entradas = entradas;
    });
    this.apiService.readProducto().subscribe((productos: Producto[]) => {
      this.productos = productos;
    });
    this.apiService.readUsuario().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
    });
  }
  buscarUsuario(id: number){
    this.usuarios.forEach((usuario) => {
      if (usuario["Id"] == id) {
        this.usuario = usuario;
      }
    });

  }
}
