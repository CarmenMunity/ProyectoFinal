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
  edit: boolean = false;
  categorias: Categoria[];
  selectedCat: Categoria = { id: null, nombre: null, descripcion: null };
  selectedOption: string;
  id: number;
  prueba = ["hoola", "hola1"];
  constructor(
    public router: Router,
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.leer();

    this.modCategoryForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl({ value: null, disabled: true }, Validators.required),
    });

    setTimeout(() => {
      /*this.categorias.forEach((categoria)=>{
       console.log(categoria['Descripcion']);
        
      });*/
      this.id = 1;
      this.modCategoryForm.get('name').setValue(this.categorias[0]["Id"]);
      this.modCategoryForm.get('description').setValue(this.categorias[0]["Descripcion"]);
    }, 600);

  }
  leer() {
    this.apiService.readCategoria().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
    });

  }
  selectOption(id: number) {
    //getted from event
    //console.log(id); 
    this.categorias.forEach((categoria) => {
      if (categoria["Id"] == id) {
        this.modCategoryForm.get('description').setValue(categoria["Descripcion"]);
      }
    });
    this.id = id;
  }
  saveChanges() {
    var nombre;
    this.categorias.forEach((categoria) => {
      if (categoria["Id"] == this.id) {
        nombre = categoria['Nombre'];
      }
    });
    Swal.fire({
      title: '¿Seguro que quieres guardar los cambios?',
      text: "No puede revertir después de aceptar este mensaje.",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, guarda.'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Guardad!',
          nombre + ' se ha modificado.',
          'success'
        )
        this.editarCategoria();
      }
    })
  }
  editar() {
    this.edit = true;
    //console.log("Le he dado al botón: " + this.edit);

    this.categorias.forEach((categoria) => {
      if (categoria["Id"] == this.id) {
        this.modCategoryForm.get('name').setValue(categoria["Nombre"]);
      }
    });
    //console.log(this.modCategoryForm.get('name').value);

    if (this.modCategoryForm.get('name').value == 1) {
      this.modCategoryForm.get('name').setValue(this.categorias[0]["Nombre"]);    
    }
    this.modCategoryForm.get('description').enable();
  }
  cancelEdit() {
    this.edit = false;
    //console.log("Le he dado al botón: " + this.edit);

    this.modCategoryForm.get('description').disable();

    this.categorias.forEach((categoria) => {
      if (categoria["Id"] == this.id) {
        this.modCategoryForm.get('name').setValue(categoria["Id"]);
      }
    });

    this.selectOption(this.id);
  }
  borrar() {
    //console.log(this.id);
    this.apiService.deleteCategoria(this.id).subscribe((categoria: Categoria) => {
      //console.log("Categoria deleted, ", categoria);
    });
    this.categorias.forEach((categoria) => {
      if (categoria["Id"] == this.id) {
        categoria["Id"] = null;
      }
    });
    this.ngOnInit();
  }
  msnBorrar() {
    var nombre;
    this.categorias.forEach((categoria) => {
      if (categoria["Id"] == this.id) {
        nombre = categoria['Nombre'];
      }
    });
    Swal.fire({
      title: '¿Está seguro que quieres borrar?',
      text: "No puede revertir después de aceptar este mensaje.",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo.'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Borrado!',
          nombre + ' se ha borrado.',
          'success'
        )
        this.borrar();
      }
    })
  }
  editarCategoria() {
    var cat;
    this.categorias.forEach((categoria) => {
      if (categoria["Id"] == this.id) {
        categoria["Nombre"] = this.modCategoryForm.get('name').value;
        categoria["Descripcion"] = this.modCategoryForm.get('description').value;
        cat=categoria;
        this.modCategoryForm.value.id=categoria["Id"];
      }
    });
    //console.log(cat);
    this.apiService.updateCategoria(this.modCategoryForm.value).subscribe((categoria: Categoria) => {
      //console.log("Categoria editada", categoria);
    });
    this.cancelEdit();
  }
}
