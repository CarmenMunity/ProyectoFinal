import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tecnica } from 'src/app/models/tecnica.model';
import { Entrada } from 'src/app/models/entrada.model';
import { ApiService } from 'src/app/api.service';
import { Tipo } from 'src/app/models/tipo.model';
import { Producto } from 'src/app/models/producto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-entrada',
  templateUrl: './edit-entrada.component.html',
  styleUrls: []
})
export class EditEntradaComponent implements OnInit {

  editEntradaForm : FormGroup;
  tecnicas: Tecnica[];
  entradas: Entrada[];
  tipos: Tipo[];
  entrada: Entrada;
  edit:boolean = false;
  idEnt:number;
  cargado: boolean= false;
  productos: Producto[];
  idTip: number;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.leer();

    this.editEntradaForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl({value:null,disabled: true}, Validators.required),
      tipo: new FormControl({value:null,disabled: true}, [Validators.required]),
      img: new FormControl({value:null,disabled: false}, [Validators.required]),
      producto:  new FormControl({value:null,disabled: true}, [Validators.required]),
      tecnica:  new FormControl({value:null,disabled: true}, [Validators.required])
    });
    setTimeout(() => {
      //console.log(this.entradas);
      this.idEnt = 1;
      this.entrada=this.entradas[0];
      this.editEntradaForm.get('title').setValue(this.entradas[0]["Id"]);
      this.editEntradaForm.get('description').setValue(this.entradas[0]["Descripcion"]);
      //this.editEntradaForm.get('ingredientes').setValue(this.entradas[0]["Ingredientes"]);
      //this.editEntradaForm.get('genero').setValue(this.entradas[0]["Genero"]);
      //this.editEntradaForm.get('marca').setValue(this.entradas[0]["Marca"]);
      //this.editEntradaForm.get('categoria').setValue(this.entradas[0]["Categoria"]);
      this.cargado=true;
      if(this.entrada["Producto"] != ""){
        this.editEntradaForm.get('tipo').setValue("Producto");
      }
      if(this.entrada["Tecnica"] != ""){
        this.editEntradaForm.get('tipo').setValue("Tecnica");
      }
      this.encontrarTipo();
    }, 600);
  }
  leer() {
    this.apiService.readEntrada().subscribe((entradas: Entrada[]) => {
      this.entradas = entradas;
    });
    this.apiService.readTecnicas().subscribe((tecnicas: Tecnica[]) => {
      this.tecnicas = tecnicas;
    });
    this.apiService.readProducto().subscribe((productos: Producto[]) => {
      this.productos = productos;
      //console.log(entradas);
    });
    this.apiService.readTipo().subscribe((tipos: Tipo[]) => {
      this.tipos = tipos;
      //console.log(this.tipos);
    });

  }
  selectOption(id: number) {
    //getted from event
    //console.log(id); 
    this.entradas.forEach((entrada) => {
      if (entrada["Id"] == id) {
        console.log(entrada);
        this.editEntradaForm.get("description").setValue(entrada["Descripcion"]);
        this.entrada= entrada;
      }
    });
    this.idEnt=id;
    this.encontrarTipo();
  }
  editProfile() {
    this.edit = true;
    //console.log("Le he dado al botón: " + this.edit);

    this.entradas.forEach((entrada) => {
      if (entrada["Id"] == this.idEnt) {
        this.editEntradaForm.get('title').setValue(entrada["Titulo"]);
        this.entrada=entrada;
      }
    });
    /*this.categorias.forEach((categoria) => {
      if (categoria["Nombre"] == this.editEntradaForm.get('categoria').value) {
        this.editEntradaForm.get('categoria').setValue(categoria["Id"]);
      }
    });*/

    this.editEntradaForm.get('description').enable();
    this.editEntradaForm.get('tipo').enable();
    if(this.entrada["Producto"] != ""){
      this.editEntradaForm.get('producto').enable();
    }
    if(this.entrada["Tecnica"] != ""){
      this.editEntradaForm.get('tecnica').enable();
    }
  }
  cancelEdit(){
    this.edit = false;
    //console.log("Le he dado al botón: " + this.edit);
    this.entradas.forEach((entrada) => {
      if (entrada["Id"] == this.idEnt) {
        this.editEntradaForm.get('title').setValue(entrada["Id"]);
        //this.editEntradaForm.get('categoria').setValue(entrada["Categoria"]);
        this.entrada= entrada;
      }
    });
    this.editEntradaForm.get('description').disable();
    this.editEntradaForm.get('tipo').enable();
    if(this.entrada["Producto"] != ""){
      this.editEntradaForm.get('producto').enable();
    }
    if(this.entrada["Tecnica"] != ""){
      this.editEntradaForm.get('tecnica').enable();
    }

    //this.modCaregoryForm.get('description').setValue(this.categoria[0].descripcion);
  }
  encontrarTipo(){
    this.tipos.forEach((tipo)=>{
      if(tipo["Entrada"] == this.idEnt){
        this.idTip = tipo["Id"];
      }
    });
  }
  msnBorrar() {
    var nombre;
    this.entradas.forEach((entrada) => {
      if (entrada["Id"] == this.idEnt) {
        nombre = entrada['Titulo'];
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
    this.apiService.deleteTipo(this.idEnt).subscribe((tipo: Tipo) => {
      console.log("Tipo deleted, ", tipo);
    });
    this.apiService.deleteEntrada(this.idEnt).subscribe((entrada: Entrada) => {
      console.log("Entrada deleted, ", entrada);
    });
    var i = 0
    this.entradas.forEach((entrada) => {
      if (entrada["Id"] == this.idEnt) {
        this.entradas.splice(i, 1);
      }
      i++;
    });
    this.editEntradaForm.get('title').setValue(this.entradas[0]["Id"]);
    this.cancelEdit();
  }
}
