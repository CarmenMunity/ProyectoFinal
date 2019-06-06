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
      name: new FormControl(null, [Validators.required, this.validateLetras()]),
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
      text: 'la tecnica ' + this.tec.nombre,
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
  validationName(): ValidatorFn {
    return (control: AbstractControl) => {
      var nombre = control.value;
      console.log(nombre);
      this.tecnicas.forEach((tecnica) => {
        if (tecnica["Nombre"].toUpperCase() == nombre.toUpperCase())  {
        console.log(tecnica["Nombre"] + ' = ' + nombre);
        return {invalidName : true};
        }
      });
      return null;
    }
    
  }
  validateLetras(): ValidatorFn{

    return (control: AbstractControl) => {
      var regExp: RegExp = /[0-9]/;
      var name = control.value;

      if (name) {
        //console.log("nombre: " + name);
        //console.log("La expresion regular es : " + regExp.test(name));

        if (regExp.test(name) ) {
          return {invalidName : true};
        }

      }
      return null;
      
    }
  }
}
