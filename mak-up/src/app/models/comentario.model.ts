import { Entrada } from './entrada.model';
import { Usuario } from './usuario.model';

export class Comentario {
    
    public entrada: Entrada;
    public usuario: Usuario;
    public puntuacion: number;

    constructor(entrada, usuario, puntuacion){
        
        this.entrada = entrada;
        this.usuario = usuario;
        this.puntuacion = puntuacion;
    }


}