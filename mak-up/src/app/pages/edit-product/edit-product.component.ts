import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria.model';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { ApiService } from 'src/app/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  modProductForm: FormGroup;
  edit: boolean= false;
  categorias: Categoria [];
  productos: Producto [];
  cat: Categoria = { id: null, nombre: null, descripcion: null };
  prod: Producto = { id: null, nombre: null, descripcion: null, genero: null, ingredientes: null, marca: null , categoria: null};
  id: number;

  constructor(
    public router: Router,
    private apiService: ApiService
  ) { 
  }

  ngOnInit() {
    this.leer();

    this.modProductForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl({value:null,disabled: true}, Validators.required),
      ingredientes: new FormControl({value:null,disabled: true}, Validators.required),
      genero: new FormControl({value: null ,disabled: true}, Validators.required),
      marca: new FormControl({value: null ,disabled: true}, Validators.required),
      categoria: new FormControl({value: null ,disabled: true}, Validators.required)
    });
    setTimeout(() => {
      //console.log(this.productos);
      this.id = 1;
      this.modProductForm.get('name').setValue(this.productos[0]["Id"]);
      this.modProductForm.get('description').setValue(this.productos[0]["Descripcion"]);
      this.modProductForm.get('ingredientes').setValue(this.productos[0]["Ingredientes"]);
      this.modProductForm.get('genero').setValue(this.productos[0]["Genero"]);
      this.modProductForm.get('marca').setValue(this.productos[0]["Marca"]);
      this.modProductForm.get('categoria').setValue(this.productos[0]["Categoria"]);
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
  selectOption(id: number) {
    //getted from event
    //console.log(id); 
    this.productos.forEach((producto) => {
      if (producto["Id"] == id) {
        this.modProductForm.get('description').setValue(producto["Descripcion"]);
        this.modProductForm.get('ingredientes').setValue(producto["Ingredientes"]);
        this.modProductForm.get('genero').setValue(producto["Genero"]); 
        this.modProductForm.get('marca').setValue(producto["Marca"]);
        this.modProductForm.get('categoria').setValue(producto["Categoria"]);
      }
    });
    this.id = id;
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
    this.productos.forEach((producto) => {
      if (producto["Id"] == this.id) {
        nombre = producto['Nombre'];
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
        this.editarProducto();
      }
    })
  }
  editProfile() {
    this.edit = true;
    //console.log("Le he dado al botón: " + this.edit);

    this.productos.forEach((producto) => {
      if (producto["Id"] == this.id) {
        this.modProductForm.get('name').setValue(producto["Nombre"]);
      }
    });
    this.categorias.forEach((categoria) => {
      if (categoria["Nombre"] == this.modProductForm.get('categoria').value) {
        this.modProductForm.get('categoria').setValue(categoria["Id"]);
      }
    });

    this.modProductForm.get('description').enable();
    this.modProductForm.get('ingredientes').enable();
    this.modProductForm.get('genero').enable();
    this.modProductForm.get('marca').enable();
    this.modProductForm.get('categoria').enable();
  }
  cancelEdit(){
    this.edit = false;
    //console.log("Le he dado al botón: " + this.edit);
    this.productos.forEach((producto) => {
      if (producto["Id"] == this.id) {
        this.modProductForm.get('name').setValue(producto["Id"]);
        this.modProductForm.get('categoria').setValue(producto["Categoria"]);
      }
    });
    this.modProductForm.get('description').disable();
    this.modProductForm.get('ingredientes').enable();
    this.modProductForm.get('genero').enable();
    this.modProductForm.get('marca').enable();
    this.modProductForm.get('categoria').disable();

    //this.modCaregoryForm.get('description').setValue(this.categoria[0].descripcion);
  }
  msnBorrar() {
    var nombre;
    this.productos.forEach((producto) => {
      if (producto["Id"] == this.id) {
        nombre = producto['Nombre'];
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
    this.apiService.deleteProducto(this.id).subscribe((producto: Producto) => {
      //console.log("producto deleted, ", producto);
    });
    var i = 0
    this.productos.forEach((producto) => {
      if (producto["Id"] == this.id) {
        this.productos.splice(i, 1);
      }
      i++;
    });
    this.modProductForm.get('name').setValue(this.productos[0]["Id"]);
    this.cancelEdit();
  }
  editarProducto() {
    var pro;
    var cat;
    this.categorias.forEach((categoria) => {
      if (categoria["Id"] == this.modProductForm.get('categoria').value) {
        cat = categoria["Nombre"];
      }
    });
    this.productos.forEach((producto) => {
      if (producto["Id"] == this.id) {
        producto["Nombre"] = this.modProductForm.get('name').value;
        producto["Descripcion"] = this.modProductForm.get('description').value;
        producto["Ingredientes"] = this.modProductForm.get('ingredientes').value;
        producto["Genero"] = this.modProductForm.get('genero').value;
        producto["Marca"] = this.modProductForm.get('marca').value;
        producto["Categoria"] = cat;
        pro=producto;
        this.modProductForm.value.id=producto["Id"];
      }
    });
    //console.log(pro);
    this.apiService.updateProducto(this.modProductForm.value).subscribe((producto: Producto) => {
     // console.log("producto editada", producto);
    });
    this.cancelEdit();
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
