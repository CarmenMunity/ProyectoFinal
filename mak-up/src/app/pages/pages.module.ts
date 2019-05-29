import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
//Pages
import { PagesComponent } from './pages.component';

//Rutas
import { PAGES_ROUTES } from "./pages.routes";

//Modules
import { SharedModule } from "../shared/shared.module";
import { RegisterComponent } from './register/register.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddTechnicComponent } from './add-technic/add-technic.component';
import { AddEntradaComponent } from './add-entrada/add-entrada.component';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    PagesComponent,
    RegisterComponent,
    AddProductComponent,
    AddTechnicComponent,
    AddEntradaComponent,
    PerfilComponent
  ],
  exports: [
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    PAGES_ROUTES,
    SharedModule,
    FormsModule,
    NgbModule,
    CommonModule,
    ReactiveFormsModule
  ]
})

export class PagesModule { }
