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

  constructor(private httpClient: HttpClient) {}
  //Categorias
  readCategoria(): Observable<Categoria[]>{
    return this.httpClient.get<Categoria[]>(`${this.PHP_API_SERVER}/php-mysql/api/leerCategoria.php`);
  }
  deleteCategoria(id: number){
    return this.httpClient.delete<Categoria>(`${this.PHP_API_SERVER}/php-mysql/api/borrarCategoria.php/?id=${id}`);
  }
  updateCategoria(categoria: Categoria){
    return this.httpClient.put<Categoria>(`${this.PHP_API_SERVER}/php-mysql/api/editarCategoria.php`, categoria);   
  }
  createCategoria(categoria: Categoria): Observable<Categoria>{
    return this.httpClient.post<Categoria>(`${this.PHP_API_SERVER}/php-mysql/api/crearCategoria.php`, categoria);
  }
}
