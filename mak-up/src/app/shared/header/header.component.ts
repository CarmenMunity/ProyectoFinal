import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//import { Router }  from
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  login: LoginComponent;
  isCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
