import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';
//modules
import {Categoria} from './models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://127.0.0.1:80";
  PHP_DB = "mak-up";

  constructor(private httpClient: HttpClient) {}

  readCategoria(): Observable<Categoria[]>{
    return this.httpClient.get<Categoria[]>(`${this.PHP_API_SERVER}/php-mysql/api/leerCategoria.php`);
  }
}
