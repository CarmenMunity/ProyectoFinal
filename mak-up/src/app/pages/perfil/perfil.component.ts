import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/models/usuario.model';
import { LoginComponent } from 'src/app/shared/login/login.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  login: LoginComponent;
  user: Usuario;
  date: any;
  edit: boolean = false;
  profileForm: FormGroup;

  constructor(
    public router: Router,
  ) { 
  }

  ngOnInit() {
    this.login.user = this.user;
    console.log(this.user);

    //console.log("Le he dado al botón: " + this.edit);
    this.profileForm = new FormGroup({
      name: new FormControl({ value: this.user.nombre, disabled: true }, Validators.required),
      surname: new FormControl({ value: this.user.apellidos, disabled: true }, Validators.required),
      email: new FormControl({value: this.user.email, disabled: true }),
      imagen: new FormControl(Validators.required),
      login: new FormControl({ value: this.user.login, disabled: true }, Validators.required)
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
    this.msgVerify().then((value) => {
      this.router.navigate(['/mi-perfil'])
    });
  }
  msgVerify() {
    return Swal.fire({
      title: "Tu cuenta ha sido modificada",
      type: "success"
    })
  }
  cancelEdit(){
    this.edit = false;
    console.log("Le he dado al botón: " + this.edit);

    this.profileForm.get('name').disable();
    this.profileForm.get('surname').disable();
    this.profileForm.get('login').disable();
    this.profileForm.get('imagen').disable();

    this.profileForm.get('name').setValue(this.user.nombre);
    this.profileForm.get('surname').setValue(this.user.apellidos);
    this.profileForm.get('login').setValue(this.user.login);
  }
}

