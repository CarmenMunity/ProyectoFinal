import { Entrada } from './entrada.model';
import { Usuario } from './usuario.model';

export class Valoracion {
    public id: number;
    public usuario: number;
    public entrada: number;
    public fecha: any;
    public descripcion: string;

    constructor(id = null, usuario, entrada, fecha, descripcion){
        this.id = id;
        this.usuario = usuario;
        this.entrada = entrada;
        this.fecha = fecha;
        this.descripcion = descripcion;
    }


}