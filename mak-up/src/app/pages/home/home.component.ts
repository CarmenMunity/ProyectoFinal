import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Entrada } from 'src/app/models/entrada.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  entradas: Entrada[];
  accept: string;

  constructor(
    public router: Router,
    private apiService: ApiService,
    private cookieService: CookieService
    ) {
      this.accept = cookieService.get("accept");
     }

  ngOnInit() {
    this.leer();
    if( this.accept == ""){
      this.msnCookies();
    }
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
    Swal.fire({
      position: 'bottom',
      type: 'question',
      text: 'Este sitio web utiliza cookies para mejorar su experiencia. Asumiremos que está de acuerdo con esto, pero puede optar por no participar si lo desea en ajustes de su navegador. ',
      showConfirmButton: true
    })
    this.cookieService.set("accept", "yes");
  }
}
