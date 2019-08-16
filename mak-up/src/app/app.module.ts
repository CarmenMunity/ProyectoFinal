import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
//Modules
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
//Pages
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from  '@angular/forms';
//Routes
import { APP_ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    APP_ROUTES,
    PagesModule,
    SharedModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
