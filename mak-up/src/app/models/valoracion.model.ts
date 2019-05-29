import { Entrada } from './entrada.model';
import { Usuario } from './usuario.model';

export class Valoracion {
    public usuario: Usuario;
    public entrada: Entrada;
    public fecha: any;
    public descripcion: string;

    constructor(id, usuario,entrada, fecha, descripcion){
        this.usuario = usuario;
        this.entrada = entrada;
        this.fecha = fecha;
        this.descripcion = descripcion;
    }


}