import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router, Event, NavigationEnd, NavigationError } from '@angular/router';
import { LoginComponent } from '../login/login.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//import { Router }  from
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  
  login: boolean = false;
  isCollapsed: boolean = true;
  constructor(
    public router: Router
  ) { 
  }

  ngOnInit() {
    console.log(localStorage.getItem("log"));
    if(localStorage.getItem("log") == "true"){
      this.login=true;
    }
  }
  ngOnChanges(changes: SimpleChanges) {
  }
  logOut() {
    this.login = false;
    console.log(this.login);
    localStorage.clear();
    //this.router.navigate(['/']);
    this.pageRefresh();
  }
  pageRefresh() {
    this.router.navigateByUrl('/iniciar-sesion', {skipLocationChange: true}).then(()=>
    this.router.navigate([""])); 
  }

}
