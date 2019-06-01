import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Modules
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
//Pages
import { AppComponent } from './app.component';

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
    NgbModule
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
