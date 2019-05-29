import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../models/usuario.model";
import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  profileForm: FormGroup;
  user: Usuario;
  
  constructor() { }

  ngOnInit() {
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
}
  
