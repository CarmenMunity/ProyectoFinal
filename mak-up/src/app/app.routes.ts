import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { AddTechnicComponent } from './pages/add-technic/add-technic.component';
import { AddEntradaComponent } from './pages/add-entrada/add-entrada.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AddCategoryComponent} from './pages/add-category/add-category.component';
import { ShowCategoryComponent} from './pages/show-category/show-category.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { EditTechnicComponent } from './pages/edit-technic/edit-technic.component';
import { EditEntradaComponent } from './pages/edit-entrada/edit-entrada.component';
import { HomeComponent } from './pages/home/home.component';
import { ShowEntradaComponent } from './pages/show-entrada/show-entrada.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'Pagina Principal'}},
  {path: '',   redirectTo: '/home', pathMatch: 'full'},
  {path: 'iniciar-sesion', component: LoginComponent},
  {path: 'annadir-producto', component: AddProductComponent},
  {path: 'annadir-tecnica', component: AddTechnicComponent},
  {path: 'annadir-entrada', component: AddEntradaComponent},
  {path: 'crear-cuenta',  component: RegisterComponent},
  {path: 'mi-perfil',  component: PerfilComponent},
  {path: 'annadir-categoria', component: AddCategoryComponent},
  {path: 'categoria', component: ShowCategoryComponent},
  {path: 'entrada', component: ShowEntradaComponent},
  {path: 'editar-producto', component: EditProductComponent},
  {path: 'editar-tecnica', component: EditTechnicComponent},
  {path: 'editar-entrada', component: EditEntradaComponent},
  //{path: '**', component: PagenotfountComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: false} );