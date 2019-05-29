import { Usuario } from './usuario.model';
import { Tipo } from './tipo.model';

export class Entrada {
    public id: number;
    public titulo: string;
    public descripcion: string;
    public imagen: any;
    public usuario: Usuario;
    public tipo: Tipo;

    constructor(id, titulo, descripcion, imagen, usuario, tipo){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.usuario = usuario;
        this.tipo = tipo;
    }


}