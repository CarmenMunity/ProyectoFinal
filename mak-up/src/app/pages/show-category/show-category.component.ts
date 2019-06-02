import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria.model';
import { ApiService } from '../../api.service';
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
  selectedCat:  Categoria  = { id :  null , nombre:null, descripcion:  null};
  selectedOption: string;
  id: number;
  prueba = ["hoola","hola1"];
  constructor(
    public router: Router,
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.leer();

    this.modCategoryForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl({value:null,disabled: true}, Validators.required),
    }); 
    this.modCategoryForm.get('name').setValue(this.prueba[0]);
    /*setTimeout(() => {
      this.categorias.forEach((categoria)=>{
       console.log(categoria['Descripcion']);
        
      });
      this.modCategoryForm.get('name').setValue(this.categorias[0]["Nombre"]);
      
    }, 1000);*/
    
  }
  leer(){
    this.apiService.readCategoria().subscribe((categorias: Categoria [])=>{
      this.categorias = categorias;
    });
    
  }
  selectOption(id: number) {
    //getted from event
    //console.log(id); 
    this.categorias.forEach((categoria)=>{
      if(categoria["Id"]==id){
        this.modCategoryForm.get('description').setValue(categoria["Descripcion"]);
      }
     });
    this.id=id;
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

    this.categorias.forEach((categoria)=>{
      if(categoria["Id"]==this.id){
        this.modCategoryForm.get('name').setValue(categoria["Nombre"]);
      }
    });

    this.modCategoryForm.get('description').enable();
    this.leer();
  }
  cancelEdit(){
    this.edit = false;
    console.log("Le he dado al botón: " + this.edit);

    this.modCategoryForm.get('description').disable();

    this.categorias.forEach((categoria)=>{
      if(categoria["Id"]==this.id){
        this.modCategoryForm.get('name').setValue(categoria["Id"]);
      }
     });
    
    this.selectOption(this.id); 
  }
  borrar(){
    console.log(this.id);
    this.apiService.deleteCategoria(this.id).subscribe((categoria: Categoria)=>{
      console.log("Categoria deleted, ", categoria);
    });
  }
  
}
