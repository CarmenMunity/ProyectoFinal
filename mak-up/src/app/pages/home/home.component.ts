import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Entrada } from 'src/app/models/entrada.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
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
  msnCookies(){
    Swal.fire(
      'Este sitio web utiliza cookies para mejorar su experiencia. Asumiremos que está de acuerdo con esto, pero puede optar por no participar si lo desea. ',
      'question'
    )
    Swal.fire({
      position: 'bottom-end',
      type: 'question',
      title: 'Este sitio web utiliza cookies para mejorar su experiencia. Asumiremos que está de acuerdo con esto, pero puede optar por no participar si lo desea. ',
      showConfirmButton: true,
      timer: 1500
    })
  }
}
