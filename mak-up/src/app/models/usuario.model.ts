export class Usuario {
    public id: number;
    public nombre: string;
    public apellidos: string;
    public email: string;
    public imagen: any;
    public perfil: string;
    public login: string;
    public pass: string;

    constructor(nombre, apellidos, email, imagen, perfil, login, pass){
        this.id = 1;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.imagen = imagen;
        this.perfil = perfil;
        this.login = login;
        this.pass = pass;
    }


}