import { Component, OnInit } from '@angular/core';
import { Producto } from "../../models/producto.model";
import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  profileForm: FormGroup;

  tipos= ["Cosmetica", "Maquillaje"];
  cats= ["Esto es un ejemplo", "luego se coge", "las categorías de la ", "base de datos"];
  
  constructor() { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      tipo: new FormControl(null, [Validators.required]),
      ingredientes: new FormControl(null, [Validators.required]),
      marca: new FormControl(null, [Validators.required]),
      cat: new FormControl(null, [Validators.required])
    }, {
        validators: [
         // this.validatePassword('password1', 'password2')
        ]
      });
      this.profileForm.get('cat').setValue(this.cats[0]);
      this.profileForm.get('tipo').setValue(this.tipos[0]);
  }

}
