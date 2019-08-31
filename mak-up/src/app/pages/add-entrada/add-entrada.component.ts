import { Component, OnInit } from '@angular/core';
import { Entrada } from "../../models/entrada.model";
import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import Swal from 'sweetalert2';
import { Producto } from 'src/app/models/producto.model';
import { Tecnica } from 'src/app/models/tecnica.model';
import { ApiService } from 'src/app/api.service';
import { Tipo } from 'src/app/models/tipo.model';

@Component({
  selector: 'app-add-entrada',
  templateUrl: './add-entrada.component.html',
  styleUrls: []
})
export class AddEntradaComponent implements OnInit {

  newEntradaForm: FormGroup;

  tipos= ["Producto", "Técnica"];

  productos: Producto [];
  tecnicas: Tecnica [];
  entrada: Entrada;
  tipo: Tipo = {id: null, entrada: null, producto: null, tecnica: null};

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.leer();
    this.newEntradaForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      tipo: new FormControl(null, [Validators.required]),
      img: new FormControl(null),
      producto:  new FormControl(null, [Validators.required]),
      tecnica:  new FormControl(null, [Validators.required])
    });
    setTimeout(() => {
      this.newEntradaForm.get('producto').setValue(this.productos[0]["Id"]);
      this.newEntradaForm.get('tecnica').setValue(this.tecnicas[0]["Id"]);
    }, 600);
  }
  leer() {
    this.apiService.readProducto().subscribe((productos: Producto[]) => {
      this.productos = productos;
    });
    this.apiService.readTecnicas().subscribe((tecnicas: Tecnica[]) => {
      this.tecnicas = tecnicas;
    });
  }
  newEntrada() {
    var idUser = parseInt(localStorage.getItem("id"));
    //var image ="assets\img" + this.newEntradaForm.get('img').value;
    //this.newEntradaForm.get('img').setValue(image);
    this.apiService.createEntrada(this.newEntradaForm.value, idUser).subscribe((entrada: Entrada) => {
      //console.log("Entrada created, ", entrada);
      this.tipo.entrada = entrada["Id"];
      this.msnVerify();
    });
    this.tipo.producto=  this.newEntradaForm.get('producto').value;
    this.tipo.producto=  this.newEntradaForm.get('tecnica').value;
    setTimeout(() => {
      //console.log(this.tipo);
      this.apiService.createTipo(this.tipo).subscribe((tipo: Tipo) => {
        //console.log("Tipo created, ", tipo);
      });
    }, 1100);
   
  }
  msnVerify() {
    Swal.fire({
      title: 'Se ha añadido la entrada',
      type: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ok'
    });
  }
}
