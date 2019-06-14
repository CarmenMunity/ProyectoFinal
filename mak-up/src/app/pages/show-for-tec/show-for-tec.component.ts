import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Tecnica } from 'src/app/models/tecnica.model';
import { Categoria } from 'src/app/models/categoria.model';
import { Entrada } from 'src/app/models/entrada.model';

@Component({
  selector: 'app-show-for-tec',
  templateUrl: './show-for-tec.component.html',
  styleUrls: ['./show-for-tec.component.css']
})
export class ShowForTecComponent implements OnInit {
  
  id: number;
  tecnicas: Tecnica[];
  categorias: Categoria[];
  entradas: Entrada[];
  
  constructor(
    public route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.id=parseInt(this.route.snapshot.queryParamMap.get('tecnica'));

    this.leer();
  }
  leer() {
    this.apiService.entradaPorTecnica(this.id).subscribe((entradas: Entrada[]) => {
      this.entradas = entradas;
    });
    this.apiService.readTecnicas().subscribe((tecnicas: Tecnica[]) => {
      this.tecnicas = tecnicas;
    });
  }

}
