import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Entrada } from 'src/app/models/entrada.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  entradas: Entrada[];

  constructor(
    public router: Router,
    private apiService: ApiService
    ) { }

  ngOnInit() {
    this.leer();
  }

  leer(){
    this.apiService.readEntrada().subscribe((entradas: Entrada[]) => {
      this.entradas = entradas;
      //console.log(entradas);
    });
  }
  irEntrada(id:number){
    this.router.navigate(['/entrada'],{queryParams:{id}})
  }
}
