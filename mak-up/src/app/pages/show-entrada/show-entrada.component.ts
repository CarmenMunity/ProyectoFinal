import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Entrada } from 'src/app/models/entrada.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-entrada',
  templateUrl: './show-entrada.component.html',
  styleUrls: ['./show-entrada.component.css']
})
export class ShowEntradaComponent implements OnInit {

  entradaForm: FormGroup;
  entradas: Entrada[];
  entrada:Entrada;
  id:number;

  constructor(
    public route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.leer();
    this.id=parseInt(this.route.snapshot.queryParamMap.get('id'));           
    this.entradaForm = new FormGroup({
      title: new FormControl({value:null,disabled: true}),
      description: new FormControl({value:null,disabled: true}),
    });
    setTimeout(() => {
      this.entradas.forEach((entrada)=>{
        if(this.id == entrada["Id"]){
          this.entrada = entrada;
          //console.log(this.entrada);
        }       
      });
      this.entradaForm.get('title').setValue(this.entrada["Titulo"]);
      this.entradaForm.get('description').setValue(this.entrada["Descripcion"]);
      
    }, 600);
  }
  leer(){
    this.apiService.readEntrada().subscribe((entradas: Entrada[]) => {
      this.entradas = entradas;
      //console.log(entradas);
    });
  }
  imgEntrada(){
    return this.entrada["Imagen"];
  }

}
