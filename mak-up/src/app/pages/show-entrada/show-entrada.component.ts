import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Entrada } from 'src/app/models/entrada.model';
import { ActivatedRoute } from '@angular/router';
import { Valoracion } from 'src/app/models/valoracion.model';

interface ICompany {
  id: number;
  rating: number;
  entrada: string;
  usuario: string;
}
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
  cargado:boolean = false;
  ratingClicked: number;
  itemIdRatingClicked: string;
  item: ICompany = { 'id': 0, 'rating': 3, 'entrada':null, 'usuario': null };

  constructor(
    public route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.leer();
    this.id=parseInt(this.route.snapshot.queryParamMap.get('id'));           
    setTimeout(() => {
      this.entradas.forEach((entrada)=>{
        if(this.id == entrada["Id"]){
          this.entrada = entrada;
          //console.log(this.entrada);
        }       
      });
      this.cargado=true; 
    }, 600);
    this.item.entrada= this.id.toString();

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
 
  ratingComponentClick(clickObj: any): void {

    if (!!this.item) {
      this.item.rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
    }
    //localStorage.setItem('rating', usuario["Id"]);
  }

}
