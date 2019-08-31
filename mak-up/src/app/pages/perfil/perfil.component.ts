import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/models/usuario.model';
import { LoginComponent } from 'src/app/shared/login/login.component';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: []
})
export class PerfilComponent implements OnInit {

  login: LoginComponent;
  usuarios: Usuario[];
  user: Usuario;
  date: any;
  edit: boolean = false;
  profileForm: FormGroup;
  id: number;

  constructor(
    public router: Router,
    private apiService: ApiService
  ) { 
  }

  ngOnInit() {
    this.leer();
    /*console.log(localStorage.getItem("log"));
    console.log(localStorage.getItem("id"));*/
    //console.log("Le he dado al botón: " + this.edit);
    this.profileForm = new FormGroup({
      name: new FormControl({ value: null, disabled: true }, Validators.required),
      surname: new FormControl({ value: null, disabled: true }, Validators.required),
      email: new FormControl({value: null, disabled: true }),
      imagen: new FormControl(Validators.required),
      login: new FormControl({ value: null, disabled: true }, Validators.required)
    });
    setTimeout(() => {
      this.id = parseInt(localStorage.getItem("id"));
      console.log(this.id);
      this.usuarios.forEach((usuario)=>{
        if(this.id == usuario["Id"]){
          this.user = usuario;
        }       
      });
      this.profileForm.get('name').setValue(this.user["Nombre"]);
      this.profileForm.get('surname').setValue(this.user["Apellidos"]);
      this.profileForm.get('email').setValue(this.user["Email"]);
      this.profileForm.get('imagen').setValue(this.user["Imagen"]);
      this.profileForm.get('login').setValue(this.user["UserName"]);
    }, 600);
  }
  leer() {
    this.apiService.readUsuario().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
      //console.log(this.usuarios);
    });
  }
  editProfile() {
    this.edit = true;
    console.log("Le he dado al botón: " + this.edit);

    this.profileForm.get('name').enable();
    this.profileForm.get('surname').enable();
    this.profileForm.get('login').enable();
    this.profileForm.get('imagen').enable();
  }
  saveChanges() {
    Swal.fire({
      title: '¿Seguro que quieres guardar los cambios?',
      text: "No puede revertir después de aceptar este mensaje.",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, guarda.'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Guardado!',
          'Se ha modificado tu perfil.',
          'success'
        )
        this.editarUsuario();
      }
    })
  }
  editarUsuario() {
    this.user["Nombre"]= this.profileForm.get("name").value;
    this.user["Apellidos"]= this.profileForm.get("surname").value;
    this.user["Imagen"]= this.profileForm.get("imagen").value;
    this.user["UserName"]= this.profileForm.get("login").value;
    console.log(this.user);
    this.apiService.updateUsuario(this.profileForm.value).subscribe((usuario: Usuario) => {
     console.log("Usuario editado", usuario);
    });
    this.cancelEdit();
  }
  cancelEdit(){
    this.edit = false;
    console.log("Le he dado al botón: " + this.edit);

    this.profileForm.get('name').disable();
    this.profileForm.get('surname').disable();
    this.profileForm.get('login').disable();
    this.profileForm.get('imagen').disable();

    this.profileForm.get('name').setValue(this.user["Nombre"]);
    this.profileForm.get('surname').setValue(this.user["Apellidos"]);
    this.profileForm.get('login').setValue(this.user["UserName"]);
  }
  msnBorrar() {
    var nombre;
    this.usuarios.forEach((usuario) => {
      if (usuario["Id"] == this.id) {
        nombre = usuario['Nombre'];
      }
    });
    Swal.fire({
      title: '¿Está seguro que quieres borrar ' + nombre + ' ?',
      text: "No puede revertir después de aceptar este mensaje.",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo.'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Borrado!',
          nombre + ' se ha borrado.',
          'success'
        )
        this.borrar();
      }
    })
  }
  borrar() {
    //console.log(this.id);
    this.apiService.deleteUsuario(this.id).subscribe((usuario: Usuario) => {
      console.log("usuario deleted, ", usuario);
    });
    var i = 0
    this.usuarios.forEach((usuario) => {
      if (usuario["Id"] == this.id) {
        this.usuarios.splice(i, 1);
      }
      i++;
    });
    this.profileForm.get('name').setValue(this.usuarios[0]["Id"]);
    this.logOut();
  }
  logOut() {
    localStorage.clear();
    //this.router.navigate(['/']);
    this.pageRefresh();
  }
  pageRefresh() {
    this.router.navigateByUrl('/iniciar-sesion', {skipLocationChange: true}).then(()=>
    this.router.navigate([""])); 
  }
}

