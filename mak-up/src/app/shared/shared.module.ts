import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from '../pages/pages.component';
//Routes
import { APP_ROUTES } from '../app.routes';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    APP_ROUTES,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoginComponent

  ]
})
export class SharedModule { }
