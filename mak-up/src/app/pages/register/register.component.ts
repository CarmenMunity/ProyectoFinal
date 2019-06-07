import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../models/usuario.model";
import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  profileForm: FormGroup;
  usuarios: Usuario[];
  user: Usuario;
  
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.leer();
    this.profileForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      login: new FormControl(null, [Validators.required]),
      password1: new FormControl(null, [Validators.required, this.validatePasswordPattern()]),
      password2: new FormControl(null, [Validators.required])
    }, {
        validators: [
          this.validatePassword('password1', 'password2')
        ]
    });
  }
  leer() {
    this.apiService.readUsuario().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
      console.log(this.usuarios);
    });

  }
  newUsuario() {
    /*var e = this.validationName();
    //console.log(e);
    if(!e){
      return Swal.fire({
        type: 'error',
        title: 'Lo sentimos, el nombre no se puede repetir.',
        text: 'Intentelo de nuevo con otro nombre para la categoria.'
      })
    }*/
    console.log(this.profileForm.value);
    this.apiService.createUsuario(this.profileForm.value).subscribe((usuario: Usuario) => {
      //console.log("usuario created, ", usuario);
      this.msnVerify(usuario);
    });

    this.ngOnInit();
  }
  msnVerify(user1) {
    this.user.id = user1["Id"]
    this.user.nombre = user1["Nombre"];
    this.user.apellidos = user1["Descripcion"];
    this.user.email = user1["Categoria"];
    this.user.perfil = user1["Perfil"];
    this.user.login = user1["Categoria"];
    this.user.pass = user1["Perfil"];
    this.user.imagen = user1["Imagen"]
    console.log(this.user);

    Swal.fire({
      title: 'Se ha añadido',
      text: 'el usuario ' + this.user.nombre,
      type: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ok'
    });
  }
  validatePassword(data1, data2) {
    return (group: FormGroup) => {
      let pass1 = group.controls[data1].value;
      let pass2 = group.controls[data2].value;

      if (pass1 === pass2) {
        return null
      } else {
        group.controls[data2].setErrors({ 'different': true });
        return {
          passwordDifferent: true
        }
      }


    }
  }


  validatePasswordPattern(): ValidatorFn {

    return (control: AbstractControl) => {
      var patternRexpNumber: RegExp = /\d+/;
      var patternRexpMayus: RegExp = /[A-Z]+/;
      var patternRexpMinus: RegExp = /[a-z]+/;
      var patternRexpSymbol: RegExp = /[@#$%^&+=]+/;
      var password = control.value;
      var errors = {}
      if (password) {

        console.log(password);

        //((!patternRexpLength.test(password) ? errors.length = true : null))
        if (password.length < 8) {
          errors['count'] = true
        }

        if (!patternRexpNumber.test(password)) {
          errors['number'] = true
        }

        if (!patternRexpMayus.test(password)) {
          errors['mayus'] = true
        }

        if (!patternRexpMinus.test(password)) {
          errors['minus'] = true
        }

        if (!patternRexpSymbol.test(password)) {
          errors['symbol'] = true
        }
        console.log(errors);

      }
      return (errors)
    }
  }
  register() {
    this.user = new Usuario(this.profileForm.value.name, this.profileForm.value.surname, this.profileForm.value.email, "", "usuario", this.profileForm.value.login, this.profileForm.value.password1);
    this.msgVerify();
  }
  msgVerify() {
    return Swal.fire({
      title: "Tu cuenta ha sido creada",
      html:`<p>Enhorabuena!</p>`,
      type: "success"
    });
  }
  /*validationName(): ValidatorFn {
    return (control: AbstractControl) => {
      var nombre = control.value;
      console.log(nombre);
      this.usuarios.forEach((usuario) => {
        if (usuario["Nombre"].toUpperCase() == nombre.toUpperCase())  {
        console.log(usuario["Nombre"] + ' = ' + nombre);
        return {invalidName : true};
        }
      });
      return null;
    }
    
  }*/
}
  
