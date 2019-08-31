import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mak-up';
  head: HeaderComponent;
  _sessionId: string;
  
  constructor(
    private cookieService: CookieService
  ) {
    this._sessionId = cookieService.get("sessionId");
  }

  ngOnInit() {}
}
