export class Categoria {
    public id: number;
    public nombre: string;
    public descripcion: string;

    constructor(id= null, nombre, descripcion){
        this.id= id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

}