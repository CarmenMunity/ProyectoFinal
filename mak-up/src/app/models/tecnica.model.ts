import { Categoria } from './categoria.model';

export class Tecnica {
    public id: number;
    public nombre: string;
    public descripcion: string;
    public categoria: Categoria;

    constructor(id, nombre, descripcion, categoria){
        this.id= id;
        this.nombre= nombre;
        this.descripcion = descripcion;
        this.categoria=categoria;
    }


}