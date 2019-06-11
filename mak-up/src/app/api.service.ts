import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';
//modules
import { Categoria } from './models/categoria.model';
import { Tecnica } from './models/tecnica.model';
import { Producto } from './models/producto.model';
import { Usuario } from './models/usuario.model';
import { Entrada } from './models/entrada.model';
import { Tipo } from './models/tipo.model';

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
  updateUsuario(usuario: Usuario){
    return this.httpClient.put<Usuario>(`${this.PHP_API_SERVER}/php-mysql/api/editarUsuario.php`, usuario);   
  }
  deleteUsuario(id: number){
    return this.httpClient.delete<Usuario>(`${this.PHP_API_SERVER}/php-mysql/api/borrarUsuario.php/?id=${id}`);
  }
  //Entrada
  createEntrada(entrada: Entrada, usuario: number): Observable<Entrada>{
    return this.httpClient.post<Entrada>(`${this.PHP_API_SERVER}/php-mysql/api/crearEntrada.php/?usuario=${usuario}`, entrada);
  }
  readEntrada(): Observable<Entrada[]>{
    return this.httpClient.get<Entrada[]>(`${this.PHP_API_SERVER}/php-mysql/api/leerEntrada.php`);
  }
  deleteEntrada(id: number){
    return this.httpClient.delete<Entrada>(`${this.PHP_API_SERVER}/php-mysql/api/borrarEntrada.php/?id=${id}`);
  }
  //Tipo
  createTipo(tipo: Tipo){
    return this.httpClient.post<Tipo>(`${this.PHP_API_SERVER}/php-mysql/api/crearTipo.php`, tipo);   
  }
  readTipo(): Observable<Tipo[]>{
    return this.httpClient.get<Tipo[]>(`${this.PHP_API_SERVER}/php-mysql/api/leerTipo.php`);
  }
  deleteTipo(id: number){
    return this.httpClient.delete<Tipo>(`${this.PHP_API_SERVER}/php-mysql/api/borrarTipo.php/?id=${id}`);
  }
}
