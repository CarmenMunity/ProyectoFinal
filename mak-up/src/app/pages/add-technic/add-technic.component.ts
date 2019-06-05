import { Component, OnInit } from '@angular/core';
import { Tecnica } from "../../models/tecnica.model";
import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria.model';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-technic',
  templateUrl: './add-technic.component.html',
  styleUrls: ['./add-technic.component.css']
})
export class AddTechnicComponent implements OnInit {

  newTechnicForm: FormGroup;
  categorias: Categoria [];
  tecnicas: Tecnica [];
  cat: Categoria = { id: null, nombre: null, descripcion: null };
  tec: Tecnica = { id: null, nombre: null, descripcion: null , categoria: null};
  
  constructor(
    public router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.leer();

    this.newTechnicForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      categoria: new FormControl(null, [Validators.required])
    });
    setTimeout(() => {
      /*this.tecnicas.forEach((tecnica)=>{
       console.log(tecnica);
        
      });*/
      //console.log(this.tecnicas);
      //console.log(this.categorias);
      this.newTechnicForm.get('categoria').setValue(this.categorias[0]["Id"]);
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
  newTecnica() {
    /*this.cat.nombre = this.addCategoryForm.get("name").value;
    this.cat.descripcion = this.addCategoryForm.get("description").value;
    console.log(this.cat);*/
    var e = this.validationName();
    //console.log(e);
    if(!e){
      return Swal.fire({
        type: 'error',
        title: 'Lo sentimos, el nombre no se puede repetir.',
        text: 'Intentelo de nuevo con otro nombre para la categoria.'
      })
    }
    if(this.newTechnicForm.get('categoria').value == 0){
      this.newTechnicForm.get('categoria').setValue(1);;
    }
    this.apiService.createTecnica(this.newTechnicForm.value).subscribe((tecnica: Tecnica) => {
      console.log("Tecnica created, ", tecnica);
      this.msnVerify(tecnica);
    });

    this.ngOnInit();
  }
  msnVerify(tec1) {
    this.tec.id = tec1["Id"]
    this.tec.nombre = tec1["Nombre"];
    this.tec.descripcion = tec1["Descripcion"];
    this.tec.categoria = tec1["Categoria"];
    console.log(this.tec);

    Swal.fire({
      title: 'Se ha añadido',
      text: 'la tecnica' + this.tec.nombre,
      type: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ok'
    });
  }
  controlCat(): ValidatorFn{
    return (control: AbstractControl)=> {
      var categoria = control.value;
      console.log(categoria);

      return null;
    }
  }
  validationName() {
    var e = true;
    var nombre = this.newTechnicForm.get('name').value;
    //console.log(nombre);
    this.tecnicas.forEach((tecnica) => {
      if (tecnica["Nombre"].toUpperCase() == nombre.toUpperCase())  {
       // console.log(tecnica["Nombre"] + ' = ' + nombre);
        e = false;
      }
    });
    return e;
  }
  validateLetras(): ValidatorFn{

    return (control: AbstractControl) => {
      //cambiar el código ante de  2099
      var patternRexpDate: RegExp = /([1][9][4-9][0-9]|[2][0][0-9][0-9])(-)(0[1-9]|1[0-2])(-)([0-2][0-9]|3[0-1])/;
      var date = control.value;

      if (date) {
        //console.log("fecha: " + date);
        //console.log("La expresion regular es : " + patternRexpDate.test(date));

        if (!patternRexpDate.test(date) ) {
          return {invalidDate : true};
        }

      }
      return null;
      
    }
  }
}
