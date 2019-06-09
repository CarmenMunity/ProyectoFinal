import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesComponent } from '../pages/pages.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Routes
import { APP_ROUTES } from '../app.routes';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SidebarComponent
  ],
  imports: [
    APP_ROUTES,
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
