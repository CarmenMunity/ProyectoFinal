import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { AddTechnicComponent } from './pages/add-technic/add-technic.component';
import { AddEntradaComponent } from './pages/add-entrada/add-entrada.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const appRoutes: Routes = [
  //{path: '', component: DashboardComponent, data: {title: 'Gestiones municipales'}},
  {path: 'iniciar-sesion', component: LoginComponent},
  {path: 'annadir-producto', component: AddProductComponent},
  {path: 'annadir-tecnica', component: AddTechnicComponent},
  {path: 'annadir-entrada', component: AddEntradaComponent},
  {path: 'crear-cuenta',  component: RegisterComponent},
  {path: 'mi-perfil',  component: PerfilComponent},
  //{path: '**', component: PagenotfountComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: false} );