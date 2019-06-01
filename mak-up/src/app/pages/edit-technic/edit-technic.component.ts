import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-technic',
  templateUrl: './edit-technic.component.html',
  styleUrls: ['./edit-technic.component.css']
})
export class EditTechnicComponent implements OnInit {
  modTechnicForm: FormGroup;
  edit: boolean= false;
  categorias: Categoria [];
  c2 = new Categoria("","asdfasdf","asdfasdfadf");
  c3 = new Categoria("","asdfasdf","asdfasdfadf");
  c4 = new Categoria("","asdfasdf","asdfasdfadf");

  constructor(
    public router: Router
  ) { 
    this.categorias= [this.c2,this.c3,this.c4];
    console.log(this.categorias[0].nombre);
  }

  ngOnInit() {
    this.modTechnicForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl({value:"hola",disabled: true}, Validators.required),
      categoria: new FormControl({value: null ,disabled: true}, Validators.required)
    });
    this.modTechnicForm.get('categoria').setValue(this.categorias[0].nombre);
  }
  editProfile() {
    this.edit = true;
    console.log("Le he dado al botón: " + this.edit);

    this.modTechnicForm.get('description').enable();
    this.modTechnicForm.get('categoria').enable();
  }
  cancelEdit(){
    this.edit = false;
    console.log("Le he dado al botón: " + this.edit);

    this.modTechnicForm.get('description').disable();
    this.modTechnicForm.get('categoria').disable();

    //this.modCaregoryForm.get('description').setValue(this.categoria[0].descripcion);
  }
}
