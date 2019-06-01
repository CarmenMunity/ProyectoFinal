import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {
  modCategoryForm: FormGroup;
  edit: boolean= false;
  categorias: Categoria [];
  c2 = new Categoria("","asdfasdf","asdfasdfadf");
  c3 = new Categoria("","asdfasdf","asdfasdfadf");
  c4 = new Categoria("","asdfasdf","asdfasdfadf");
  
  constructor(
    public router: Router,
  ) {
    this.categorias= [this.c2,this.c3,this.c4];
    console.log(this.categorias[0].nombre);
  }

  ngOnInit() {
    
    this.modCategoryForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl({value:"hola",disabled: true}, Validators.required),
    });
    this.modCategoryForm.get('name').setValue(this.categorias[0].nombre);
  }
  saveChanges() {
    this.msgVerify().then((value) => {
      this.router.navigate(['/categoria'])
    });
  }
  msgVerify() {
    return Swal.fire({
      title: "Tu cuenta ha sido modificada",
      type: "success"
    })
  }
  editProfile() {
    this.edit = true;
    console.log("Le he dado al botón: " + this.edit);

    this.modCategoryForm.get('description').enable();
  
  }
  cancelEdit(){
    this.edit = false;
    console.log("Le he dado al botón: " + this.edit);

    this.modCategoryForm.get('description').disable();

    //this.modCaregoryForm.get('description').setValue(this.categoria[0].descripcion);
  }

}
