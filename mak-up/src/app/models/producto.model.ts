import { Categoria } from './categoria.model';

export class Producto {
    public id: number;
    public nombre: string;
    public descripcion: string;
    public genero: string;
    public ingredientes: string;
    public marca: string;
    public categoria: Categoria;

    constructor(id, nombre, descripcion, genero, ingredientes, marca, categoria){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.genero = genero;
        this.ingredientes = ingredientes;
        this.marca = marca;
        this.categoria = categoria;
    }


}