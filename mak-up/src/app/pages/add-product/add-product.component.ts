import { Component, OnInit } from '@angular/core';
import { Producto } from "../../models/producto.model";
import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import Swal from 'sweetalert2';
import { Categoria } from 'src/app/models/categoria.model';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  newProductForm: FormGroup;
  categorias: Categoria [];
  productos: Producto [];
  cat: Categoria = { id: null, nombre: null, descripcion: null };
  prod: Producto = { id: null, nombre: null, descripcion: null, genero: null, ingredientes: null, marca: null , categoria: null};
  
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.leer();

    this.newProductForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      genero: new FormControl(null, [Validators.required]),
      ingredientes: new FormControl(null, [Validators.required]),
      marca: new FormControl(null, [Validators.required]),
      categoria: new FormControl(null, [Validators.required])
    });
    setTimeout(() => {
      /*this.tecnicas.forEach((tecnica)=>{
       console.log(tecnica);
        
      });*/
      //console.log(this.tecnicas);
      //console.log(this.categorias);
      this.newProductForm.get('categoria').setValue(this.categorias[0]["Id"]);
    }, 600);
  }
  leer() {
    this.apiService.readProducto().subscribe((productos: Producto[]) => {
      this.productos = productos;
    });
    this.apiService.readCategoria().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
    });
  }
  newProducto() {
    var e = this.validationName();
    //console.log(e);
    if(!e){
      return Swal.fire({
        type: 'error',
        title: 'Lo sentimos, el nombre no se puede repetir.',
        text: 'Intentelo de nuevo con otro nombre para la categoria.'
      })
    }
    if(this.newProductForm.get('categoria').value == 0){
      this.newProductForm.get('categoria').setValue(1);;
    }
    console.log(this.newProductForm.value);
    this.apiService.createProducto(this.newProductForm.value).subscribe((producto: Producto) => {
      console.log("Producto created, ", producto);
      this.msnVerify(producto);
    });

    this.ngOnInit();
  }
  msnVerify(prod1) {
    this.prod.id = prod1["Id"]
    this.prod.nombre = prod1["Nombre"];
    this.prod.descripcion = prod1["Descripcion"];
    this.prod.categoria = prod1["Categoria"];
    console.log(this.prod);

    Swal.fire({
      title: 'Se ha añadido',
      text: 'el producto ' + this.prod.nombre,
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
      this.productos.forEach((producto) => {
        if (producto["Nombre"].toUpperCase() == nombre.toUpperCase())  {
        console.log(producto["Nombre"] + ' = ' + nombre);
        return {invalidName : true};
        }
      });
      return null;
    }
    
  }

}
