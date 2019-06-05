import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria.model';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Tecnica } from 'src/app/models/tecnica.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-technic',
  templateUrl: './edit-technic.component.html',
  styleUrls: ['./edit-technic.component.css']
})
export class EditTechnicComponent implements OnInit {
  modTechnicForm: FormGroup;
  edit: boolean= false;
  categorias: Categoria [];
  tecnicas: Tecnica [];
  id: number;

  constructor(
    public router: Router,
    private apiService: ApiService
  ) { 
  }
  

  ngOnInit() {
    this.leer();

    this.modTechnicForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl({value:null,disabled: true}, Validators.required),
      categoria: new FormControl({value: null ,disabled: true}, Validators.required)
    });

    setTimeout(() => {
      /*this.tecnicas.forEach((tecnica)=>{
       console.log(tecnica);
        
      });*/
      //console.log(this.tecnicas);
      this.id = 1;
      this.modTechnicForm.get('name').setValue(this.tecnicas[0]["Id"]);
      this.modTechnicForm.get('description').setValue(this.tecnicas[0]["Descripcion"]);
      this.modTechnicForm.get('categoria').setValue(this.tecnicas[0]["Categoria"]);
    }, 600);
    
  }

  leer() {
    this.apiService.readTecnicas().subscribe((tecnicas: Tecnica[]) => {
      this.tecnicas = tecnicas;
    });
    this.apiService.readCategoria().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
    });
  }
  selectOption(id: number) {
    //getted from event
    //console.log(id); 
    this.tecnicas.forEach((tecnica) => {
      if (tecnica["Id"] == id) {
        this.modTechnicForm.get('description').setValue(tecnica["Descripcion"]);
        this.modTechnicForm.get('categoria').setValue(tecnica["Categoria"]);
      }
    });
    this.id = id;
  }
  editProfile() {
    this.edit = true;
    //console.log("Le he dado al botón: " + this.edit);
    this.tecnicas.forEach((tecnica) => {
      if (tecnica["Id"] == this.id) {
        this.modTechnicForm.get('name').setValue(tecnica["Nombre"]);
      }
    });
    this.categorias.forEach((categoria) => {
      if (categoria["Nombre"] == this.modTechnicForm.get('categoria').value) {
        this.modTechnicForm.get('categoria').setValue(categoria["Id"]);
      }
    });
    this.modTechnicForm.get('description').enable();
    this.modTechnicForm.get('categoria').enable();

  }
  saveChanges() {
    var e = this.validationName();
    //console.log(e);
    if(!e){
      return Swal.fire({
        type: 'error',
        title: 'Lo sentimos, el nombre no se puede repetir.',
        text: 'Intentelo de nuevo con otro nombre para la categoria.'
      })
    }
    var nombre;
    this.tecnicas.forEach((tecnica) => {
      if (tecnica["Id"] == this.id) {
        nombre = tecnica['Nombre'];
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
          'Guardado!',
          nombre + ' se ha modificado.',
          'success'
        )
        this.editarTecnica();
      }
    })
  }
  cancelEdit(){
    this.edit = false;
    //console.log("Le he dado al botón: " + this.edit);
    this.tecnicas.forEach((tecnica) => {
      if (tecnica["Id"] == this.id) {
        this.modTechnicForm.get('name').setValue(tecnica["Id"]);
        this.modTechnicForm.get('categoria').setValue(tecnica["Categoria"]);
      }
    });

    this.modTechnicForm.get('description').disable();
    this.modTechnicForm.get('categoria').disable();
  }
  msnBorrar() {
    var nombre;
    this.tecnicas.forEach((tecnica) => {
      if (tecnica["Id"] == this.id) {
        nombre = tecnica['Nombre'];
      }
    });
    Swal.fire({
      title: '¿Está seguro que quieres borrar ' + nombre + ' ?',
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
  borrar() {
    //console.log(this.id);
    this.apiService.deleteTecnica(this.id).subscribe((tecnica: Tecnica) => {
      //console.log("Tecnica deleted, ", tecnica);
    });
    var i = 0
    this.tecnicas.forEach((tecnica) => {
      if (tecnica["Id"] == this.id) {
        this.tecnicas.splice(i, 1);
      }
      i++;
    });
    this.modTechnicForm.get('name').setValue(this.tecnicas[0]["Id"]);
    this.cancelEdit();
  }
  editarTecnica() {
    var tec;
    var cat;
    this.categorias.forEach((categoria) => {
      if (categoria["Id"] == this.modTechnicForm.get('categoria').value) {
        cat = categoria["Nombre"];
      }
    });
    this.tecnicas.forEach((tecnica) => {
      if (tecnica["Id"] == this.id) {
        tecnica["Nombre"] = this.modTechnicForm.get('name').value;
        tecnica["Descripcion"] = this.modTechnicForm.get('description').value;
        tecnica["Categoria"] = cat;
        tec=tecnica;
        this.modTechnicForm.value.id=tecnica["Id"];
      }
    });
    //console.log(tec);
    this.apiService.updateTecnica(this.modTechnicForm.value).subscribe((tecnica: Tecnica) => {
     // console.log("Tecnica editada", tecnica);
    });
    this.cancelEdit();
  }
  validationName() {
    var e = true;
    var nombre = this.modTechnicForm.get('name').value;
    //console.log(nombre);
    this.tecnicas.forEach((tecnica) => {
      if (tecnica["Nombre"].toUpperCase() == nombre.toUpperCase())  {
       //console.log(tecnica["Nombre"] + ' = ' + nombre);
        e = false;
      }
    });
    return e;
  }
}
