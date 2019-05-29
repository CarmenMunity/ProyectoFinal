import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public isLogged: boolean = false;
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
  public alert: any = {};
  public showAlert: boolean;

  constructor(
    public router: Router
  ) {
    this.showAlert = false;
  }

  ngOnInit() {
  }

  logOut() {
    this.isLogged = false;
    console.log(this.isLogged);
    localStorage.clear();
  }

  isLogeed() {
    
    if (typeof (Storage) !== "undefined") {
      this.isLogged = true;
      console.log(this.isLogeed);
      
    } else {
      console.log("LocalStorage no soportado en este navegador");
    }

  }


}
