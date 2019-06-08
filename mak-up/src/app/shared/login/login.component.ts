import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, NavigationError } from '@angular/router';
import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { ApiService } from 'src/app/api.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged: HeaderComponent;
  public closeResult: string;
  public alerts: any = {
    warning: {
      type: 'warning',
      message: 'Ha ocurrido un error al recuperar su usuario!'
    },
    errorPassword: {
      type: 'danger',
      message: 'Contraseña incorrecta!!'
    },
    success: {
      type: 'success',
      message: 'Sesión iniciada correctamente.'
    },
  }
  loginForm: FormGroup;
  usuarios: Usuario[];
  user: Usuario  = { id: null, nombre: null, apellidos: null, email: null, imagen: null, perfil: null, login: null, pass: null };;
  public alert: any = {};
  public showAlert: boolean;

  constructor(
    public router: Router,
    private apiService: ApiService
  ) {
    this.showAlert = false;
  }

  ngOnInit() {
    this.leer();
    this.loginForm = new FormGroup({
      //name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      pass: new FormControl(null, [Validators.required]),
    });
    
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
    var i = 0;
    this.usuarios.forEach((usuario) =>{
      if(this.user.email == usuario["Email"]){
        // console.log(usuario);
        //console.log(this.log);
        if(this.user.pass == usuario["Pass"]){
         // console.log(usuario);
          //this.user.id=usuario["Id"];
          localStorage.setItem('id', usuario["Id"]);
          console.log(localStorage.getItem('id'));
          //console.log(this.log);
          localStorage.setItem('log',"true");
          console.log(localStorage.getItem("log"));
        }
      }
    })
  }
  logOut() {
    /*this.log = false;
    console.log(this.log);
    localStorage.clear();*/
  }


}
