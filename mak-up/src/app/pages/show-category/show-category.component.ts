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

  constructor(
    public router: Router,
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.apiService.readCategoria().subscribe((categorias: Categoria [])=>{
      this.categorias = categorias;
    });
    /*setTimeout(() => {
      this.categorias.forEach((categoria)=>{
       console.log(categoria['Descripcion']);
        
      });
      
    }, 1000);*/

    this.modCategoryForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl({value:null,disabled: true}, Validators.required),
    }); 

    
  }
  selectOption(id: number) {
    //getted from event
    console.log(id);
    this.modCategoryForm.get('description').setValue(this.categorias[id]["Descripcion"]);
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
