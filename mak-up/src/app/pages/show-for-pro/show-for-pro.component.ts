import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Producto } from 'src/app/models/producto.model';
import { Categoria } from 'src/app/models/categoria.model';
import { Entrada } from 'src/app/models/entrada.model';

@Component({
  selector: 'app-show-for-pro',
  templateUrl: './show-for-pro.component.html',
  styleUrls: ['./show-for-pro.component.css']
})
export class ShowForProComponent implements OnInit {

  id: number;
  productos: any[];
  categorias: Categoria[];
  entradas: Entrada[];
  
  constructor(
    public route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.id=parseInt(this.route.snapshot.queryParamMap.get('producto'));
  }

  leer() {
    this.apiService.entradaPorProducto(this.id).subscribe((entradas: Entrada[]) => {
      this.entradas = entradas;
    });
    this.apiService.readCategoria().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
    });
  }
}
