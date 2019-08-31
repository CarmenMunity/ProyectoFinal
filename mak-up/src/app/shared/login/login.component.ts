import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, NavigationError } from '@angular/router';
import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { ApiService } from 'src/app/api.service';
import { HeaderComponent } from '../header/header.component';
import { Location } from '@angular/common';
import Swal from 'sweetalert2'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log:boolean = false;
  public closeResult: string;
  loginForm: FormGroup;
  usuarios: Usuario[];
  user: Usuario  = { id: null, nombre: null, apellidos: null, email: null, imagen: null, perfil: null, login: null, pass: null };;
  public alert: any = {};
  public showAlert: boolean;
  private _sessionId: string;

  constructor(
    public router: Router,
    private apiService: ApiService,
    private cookieService: CookieService
  ) {
    this.showAlert = false;
    this._sessionId = cookieService.get("sessionId");
  }

  ngOnInit() {
    this.leer();
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      pass: new FormControl(null, [Validators.required]),
    });
    
  }
  public sessionId(value: string) {
    this._sessionId = value;
    this.cookieService.set("sessionId", value);
  }
  leer() {
    this.apiService.readUsuario().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
      //console.log(this.usuarios);
    });

  }
  logIn(){
    this.user.email= this.loginForm.get("email").value;
    this.user.pass= this.loginForm.get("pass").value;
    this.usuarios.forEach((usuario) =>{
      if(this.user.email == usuario["Email"]){
        // console.log(usuario);
        //console.log(this.log);
        if(this.user.pass == usuario["Pass"]){
         // console.log(usuario);
          //this.user.id=usuario["Id"];
          this.sessionId(usuario["Id"]);
          localStorage.setItem('id', usuario["Id"]);
          localStorage.setItem('nombre', usuario["Nombre"]);
          localStorage.setItem('perfil', usuario["Perfil"]);
          localStorage.setItem('userName', usuario["UserName"]);
          //console.log(localStorage.getItem('id'));
          this.log=true;
          localStorage.setItem('log',"true");
          //console.log(localStorage.getItem("log"));
          //this.router.navigate(['/']);
          this.pageRefresh();
        }
      }
    });//fin foreach
    if(!this.log){
      Swal.fire({
        type: 'error',
        title: 'Error',
        text: 'El email o la contraseña no son correctos'
      });
    }
  }
  logOut() {
    /*this.log = false;
    console.log(this.log);
    localStorage.clear();*/
  }
  pageRefresh() {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([""])); 
  }

}
