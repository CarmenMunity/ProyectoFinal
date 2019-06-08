import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';
//modules
import { Categoria } from './models/categoria.model';
import { Tecnica } from './models/tecnica.model';
import { Producto } from './models/producto.model';
import { Usuario } from './models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://localhost";

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
  //Tecnicas
  readTecnicas(): Observable<Tecnica[]>{
    return this.httpClient.get<Tecnica[]>(`${this.PHP_API_SERVER}/php-mysql/api/leerTecnica.php`);
  }
  deleteTecnica(id: number){
    return this.httpClient.delete<Tecnica>(`${this.PHP_API_SERVER}/php-mysql/api/borrarTecnica.php/?id=${id}`);
  }
  updateTecnica(tecnica: Tecnica){
    return this.httpClient.put<Tecnica>(`${this.PHP_API_SERVER}/php-mysql/api/editarTecnica.php`, tecnica);   
  }
  createTecnica(tecnica: Tecnica): Observable<Tecnica>{
    return this.httpClient.post<Tecnica>(`${this.PHP_API_SERVER}/php-mysql/api/crearTecnica.php`, tecnica);
  }
  //Productos
  readProducto(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.PHP_API_SERVER}/php-mysql/api/leerProducto.php`);
  }
  deleteProducto(id: number){
    return this.httpClient.delete<Producto>(`${this.PHP_API_SERVER}/php-mysql/api/borrarProducto.php/?id=${id}`);
  }
  updateProducto(producto: Producto){
    return this.httpClient.put<Producto>(`${this.PHP_API_SERVER}/php-mysql/api/editarProducto.php`, producto);   
  }
  createProducto(producto: Producto): Observable<Producto>{
    return this.httpClient.post<Producto>(`${this.PHP_API_SERVER}/php-mysql/api/crearProducto.php`, producto);
  }
  //Usuarios
  createUsuario(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.post<Usuario>(`${this.PHP_API_SERVER}/php-mysql/api/crearUsuario.php`, usuario);
  }
  readUsuario(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.PHP_API_SERVER}/php-mysql/api/leerUsuario.php`);
  }
}
