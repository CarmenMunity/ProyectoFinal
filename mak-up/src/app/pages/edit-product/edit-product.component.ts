import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  modProductForm: FormGroup;
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
    this.modProductForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl({value:"hola",disabled: true}, Validators.required),
      ingredientes: new FormControl({value:"hola",disabled: true}, Validators.required),
      tipo: new FormControl({value: null ,disabled: true}, Validators.required),
      marca: new FormControl({value: "cocacola" ,disabled: true}, Validators.required),
      categoria: new FormControl({value: null ,disabled: true}, Validators.required)
    });
    this.modProductForm.get('categoria').setValue(this.categorias[0].nombre);
  }
  editProfile() {
    this.edit = true;
    console.log("Le he dado al botón: " + this.edit);

    this.modProductForm.get('description').enable();
    this.modProductForm.get('ingredientes').enable();
    this.modProductForm.get('tipo').enable();
    this.modProductForm.get('marca').enable();
    this.modProductForm.get('categoria').enable();
  }
  cancelEdit(){
    this.edit = false;
    console.log("Le he dado al botón: " + this.edit);

    this.modProductForm.get('description').disable();
    this.modProductForm.get('ingredientes').enable();
    this.modProductForm.get('tipo').enable();
    this.modProductForm.get('marca').enable();
    this.modProductForm.get('categoria').disable();

    //this.modCaregoryForm.get('description').setValue(this.categoria[0].descripcion);
  }

}
