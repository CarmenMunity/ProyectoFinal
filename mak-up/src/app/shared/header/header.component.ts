import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component'
//import { Router }  from
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login: LoginComponent;
  constructor() { }

  ngOnInit() {
  }

}
