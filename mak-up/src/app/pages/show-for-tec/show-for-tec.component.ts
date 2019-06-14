import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Tecnica } from 'src/app/models/tecnica.model';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-show-for-tec',
  templateUrl: './show-for-tec.component.html',
  styleUrls: ['./show-for-tec.component.css']
})
export class ShowForTecComponent implements OnInit {
  
  id: number;
  tecnicas: Tecnica[];
  categorias: Categoria[];
  
  constructor(
    public route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }
  leer() {
    this.apiService.readTecnicas().subscribe((tecnicas: Tecnica[]) => {
      this.tecnicas = tecnicas;
    });
    this.apiService.readCategoria().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
    });
  }

}
