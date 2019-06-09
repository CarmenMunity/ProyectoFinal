import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LoginComponent } from '../login/login.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//import { Router }  from
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  
  login: boolean;
  isCollapsed: boolean = true;
  constructor() { 
    this.login = false;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.login){
      this.ngOnInit();
    }
  }

}
