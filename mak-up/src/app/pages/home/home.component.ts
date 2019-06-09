import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Entrada } from 'src/app/models/entrada.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  entradas: Entrada[];

  constructor(
    private apiService: ApiService
    ) { }

  ngOnInit() {
    this.leer();
    setTimeout(() => {
      /*this.tecnicas.forEach((tecnica)=>{
       console.log(tecnica);
        
      });*/
      //console.log(this.tecnicas);
      console.log(this.entradas);
      
    }, 600);
  }

  leer(){
    this.apiService.readEntrada().subscribe((entradas: Entrada[]) => {
      this.entradas = entradas;
      console.log(entradas);
    });
  }

}
