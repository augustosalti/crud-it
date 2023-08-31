import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TornillosElement } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{

  @Output() cargarNuevo = new EventEmitter<TornillosElement>();
  //campos del form
  marca: string = '';
  nombre: string = '';
  formato: string = '';
  precio : number = 0.1;


  formatos : String[] = ['Test1', 'Test2', 'Test3'];

  form: FormGroup;
  
  constructor(private modal: NgbModal, private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      formato: ['', Validators.required],
      marca: ['', Validators.required]
    });
   }

  openModal(targetModal: any, size: string = 'lg'){

    this.modal.open(targetModal, {
      size,
      backdrop: true,
      animation: true,
      keyboard: false,
      backdropClass: "modal-backdrop",
      centered: true
    });
  }

  onSubmit() {
    const nuevoProducto : TornillosElement =
     {
        Nombre: this.nombre,
        Precio: this.precio,
        Formato: this.formato,
        Marca: this.marca
    }
    this.cargarNuevo.emit(nuevoProducto);
    this.setDefault();
  }

  increment() {
    this.precio = Number(this.precio) + 0.1;
    this.precio = Number(this.precio.toFixed(2));
  }

  decrement() {
    if(Number(this.precio) <= 0){
      return;
    }
    this.precio = Number(this.precio) - 0.1;
    this.precio = Number(this.precio.toFixed(2));
  }

  setDefault = () => {
    this.marca = '';
    this.nombre = '';
    this.formato = '';
    this.precio = 0.1;
  }

}
