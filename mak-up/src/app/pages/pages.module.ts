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
import { AddCategoryComponent } from './add-category/add-category.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditTechnicComponent } from './edit-technic/edit-technic.component'

@NgModule({
  declarations: [
    PagesComponent,
    RegisterComponent,
    AddProductComponent,
    AddTechnicComponent,
    AddEntradaComponent,
    AddCategoryComponent,
    PerfilComponent,
    ShowCategoryComponent,
    EditProductComponent,
    EditTechnicComponent
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
