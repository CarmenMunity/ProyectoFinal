import { Component, OnInit } from '@angular/core';
import { Entrada } from "../../models/entrada.model";
import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-entrada',
  templateUrl: './add-entrada.component.html',
  styleUrls: ['./add-entrada.component.css']
})
export class AddEntradaComponent implements OnInit {

  profileForm: FormGroup;

  tipos= ["Producto", "Técnica"];

  productos= ["Base", "p1", "p2"];
  tecnicas= ["t3", "t1", "t2"];

  constructor() { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      tipo: new FormControl(null, [Validators.required]),
      img: new FormControl(null, [Validators.required]),
      producto:  new FormControl(null, [Validators.required]),
      tecnica:  new FormControl(null, [Validators.required])
    }, {
        validators: [
         // this.validatePassword('password1', 'password2')
        ]
      });
      this.profileForm.get('tipo').setValue(this.tipos[0]);
      this.profileForm.get('producto').setValue(this.productos[0]);
      this.profileForm.get('tecnica').setValue(this.tecnicas[0]);
  }

}
