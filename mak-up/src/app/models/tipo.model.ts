import { Entrada } from './entrada.model';
import { Producto } from './producto.model';
import { Tecnica } from './tecnica.model';

export class Tipo {
    public id: number;
    public entrada: Entrada;
    public producto: Producto;
    public tecnica: Tecnica;

    constructor(id, entrada, producto, tecnica){
        this.id = id;
        this.entrada = entrada;
        this.producto = producto;
        this.tecnica = tecnica;
    }


}