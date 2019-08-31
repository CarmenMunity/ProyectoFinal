import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router, Event, NavigationEnd, NavigationError } from '@angular/router';
import { LoginComponent } from '../login/login.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/usuario.model';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'ngx-cookie-service';

//import { Router }  from
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  
  login: boolean = false;
  isCollapsed: boolean = true;
  usuarios: Usuario[];
  usuario: Usuario;
  id:number;
  perfil:string;
  private _sessionId: string;
  data: string;

  constructor(
    public router: Router,
    private apiService: ApiService,
    private cookieService: CookieService
  ) {   
    this._sessionId = cookieService.get("sessionId");
  }
  ngOnInit() {
    if(this._sessionId != ""){
      this.login=true;
      //console.log("he entrado y esto funciona");
    }
    //console.log(localStorage.getItem("log"));
    /*if(localStorage.getItem("log") == "true"){
      this.login=true;
    }*/
    this.perfil = localStorage.getItem("perfil");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes + "los cambios");
    if (changes['_sessionId']) {
      console.log('Hello ');
    }
  }
  public getSessionId() {
    return this.cookieService.get("sessionId");
  }
  public sessionId(value: string) {
    this._sessionId = value;
    this.cookieService.set("sessionId", value);
  }
  logOut() {
    this.login = false;
    //console.log(this.login);
    localStorage.clear();
    this.cookieService.deleteAll();
    //this.router.navigate(['/']);
    this.pageRefresh();
  }
  pageRefresh() {
    this.router.navigateByUrl('/iniciar-sesion', {skipLocationChange: true}).then(()=>
    this.router.navigate([""])); 
  }
  leer() {
    this.apiService.readUsuario().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
      //console.log(this.usuarios);
    });

  }

}
