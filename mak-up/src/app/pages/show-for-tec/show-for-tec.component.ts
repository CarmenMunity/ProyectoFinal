import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Tecnica } from 'src/app/models/tecnica.model';
import { Categoria } from 'src/app/models/categoria.model';
import { Entrada } from 'src/app/models/entrada.model';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-show-for-tec',
  templateUrl: './show-for-tec.component.html',
  styleUrls: ['./show-for-tec.component.css']
})
export class ShowForTecComponent implements OnInit {
  
  id: number;
  tecnicas: Tecnica[];
  tecnica: Tecnica;
  categorias: Categoria[];
  entradas: Entrada[];
  cargado: boolean = false;
  usuarios: Usuario[];
  usuario: Usuario;
  
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.id=parseInt(this.route.snapshot.queryParamMap.get('tecnica'));

    this.leer();
    setTimeout(() => {
      //console.log(this.productos);
      this.tecnicas.forEach((tecnica) => {
        if (tecnica["Id"] == this.id) {
          this.tecnica = tecnica;
        }
      });
      this.cargado = true;
    }, 600);
  }
  leer() {
    this.apiService.entradaPorTecnica(this.id).subscribe((entradas: Entrada[]) => {
      this.entradas = entradas;
    });
    this.apiService.readTecnicas().subscribe((tecnicas: Tecnica[]) => {
      this.tecnicas = tecnicas;
    });
  }
  irEntrada(id:number){
    this.router.navigate(['/entrada'],{queryParams:{id}})
  }
}
