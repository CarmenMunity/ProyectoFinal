import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from '../shared/login/login.component';
import { PagesComponent } from './pages.component';



const pagesRoutes: Routes = [
    {path: 'login', component: LoginComponent}
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );