import { Component, OnInit } from '@angular/core';
import { Entrada } from "../../models/entrada.model";
import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import Swal from 'sweetalert2';
import { Producto } from 'src/app/models/producto.model';
import { Tecnica } from 'src/app/models/tecnica.model';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-entrada',
  templateUrl: './add-entrada.component.html',
  styleUrls: ['./add-entrada.component.css']
})
export class AddEntradaComponent implements OnInit {

  profileForm: FormGroup;

  tipos= ["Producto", "Técnica"];

  productos: Producto [];
  tecnicas: Tecnica [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      tipo: new FormControl(null, [Validators.required]),
      img: new FormControl(null, [Validators.required]),
      producto:  new FormControl(null, [Validators.required]),
      tecnica:  new FormControl(null, [Validators.required])
    });

    this.profileForm.get('tipo').setValue(this.tipos[0]);
    this.profileForm.get('producto').setValue(this.productos[0]);
    this.profileForm.get('tecnica').setValue(this.tecnicas[0]);
  }
  leer() {
    this.apiService.readProducto().subscribe((productos: Producto[]) => {
      this.productos = productos;
    });
    this.apiService.readTecnicas().subscribe((tecnicas: Tecnica[]) => {
      this.tecnicas = tecnicas;
    });
  }

}
