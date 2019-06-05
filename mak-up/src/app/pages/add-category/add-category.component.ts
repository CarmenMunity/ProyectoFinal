import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria.model';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  addCategoryForm: FormGroup;
  categorias: Categoria[];
  cat: Categoria = { id: null, nombre: null, descripcion: null };

  constructor(
    public router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.leer();


    this.addCategoryForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(25)]),
      description: new FormControl(null, Validators.required),
    });


  }

  msnVerify(cat1) {
    this.cat.id = cat1["Id"]
    this.cat.nombre = cat1["Nombre"];
    this.cat.descripcion = cat1["Descripcion"];
    //console.log(this.cat);

    Swal.fire({
      title: 'Se ha añadido',
      text: 'la categoria' + this.cat.nombre,
      type: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ok'
    });
  }
  newCategoria() {

    /*this.cat.nombre = this.addCategoryForm.get("name").value;
    this.cat.descripcion = this.addCategoryForm.get("description").value;
    console.log(this.cat);*/
    var e = this.validationName();
    //console.log(e);
    if(e == false){
      return Swal.fire({
        type: 'error',
        title: 'Lo sentimos, el nombre no se puede repetir.',
        text: 'Intentelo de nuevo con otro nombre para la categoria.'
      })
      
    }
    this.apiService.createCategoria(this.addCategoryForm.value).subscribe((categoria: Categoria) => {
      //console.log("Categoria created, ", categoria);
      this.msnVerify(categoria);
    });
    this.ngOnInit();
  }
  leer() {
    this.apiService.readCategoria().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
    });
  }

  validationName() {
    var e = true;
    var nombre = this.addCategoryForm.get('name').value;
    //console.log(nombre);
    this.categorias.forEach((categoria) => {
      if (categoria["Nombre"].toUpperCase() == nombre.toUpperCase()) {
        //console.log(categoria["Nombre"] + ' = ' + nombre);
        e = false;
      }
    });
    return e;
  }
  

}
