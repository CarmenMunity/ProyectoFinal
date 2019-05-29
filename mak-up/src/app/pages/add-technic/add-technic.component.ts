import { Component, OnInit } from '@angular/core';
import { Producto } from "../../models/producto.model";
import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-add-technic',
  templateUrl: './add-technic.component.html',
  styleUrls: ['./add-technic.component.css']
})
export class AddTechnicComponent implements OnInit {
  profileForm: FormGroup;

  cats= ["Esto es un ejemplo", "luego se coge", "las categorías de la ", "base de datos"];
  constructor() { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      cat: new FormControl(null, [Validators.required])
    }, {
        validators: [
         // this.validatePassword('password1', 'password2')
        ]
      });
      this.profileForm.get('cat').setValue(this.cats[0]);
  }

}
