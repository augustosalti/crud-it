import { Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';

//material
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


import { OrdenTablas, TornillosElement } from 'src/app/interfaces/interfaces'; // interfaces
import { DataService } from '../../services/data.service'; // importo el servicio que me trae los datos

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent  implements OnInit {

  items: any;


  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  pageNumber: any;
  dataSource: MatTableDataSource<TornillosElement> | undefined;
  idSelected: string | undefined;

  

  constructor(private dataService: DataService, private modal: NgbModal) {}


  displayedColumns: string[] = ['Nombre', 'Precio', 'Formato', 'Marca', "Acciones"];
  displayedColumns_aux: string[] = ['Nombre', 'Precio', 'Formato', 'Marca', "Acciones"];

  ordenTablas : OrdenTablas[] = [
    { 'orden' : 0, 'tipo' : 'Nombre' },
    { 'orden' : 1, 'tipo' : 'Precio' },
    { 'orden' : 2, 'tipo' : 'Formato' },
    { 'orden' : 3, 'tipo' : 'Marca' },
    { 'orden' : 4, 'tipo' : 'Acciones' },
  ]



  ngOnInit(): void {
    this.dataService.getItems().subscribe((items) => {
      this.items = items;
      this.items.paginator = this.paginator;
      this.dataSource = new MatTableDataSource<TornillosElement>(items);
      
        if(this.paginator){
          this.dataSource.paginator = this.paginator;
        }
      });

  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns_aux, event.previousIndex, event.currentIndex);
  }
  
  openModal(targetModal: any, size: string = 'lg', id_producto?: any){

    id_producto ? this.idSelected = id_producto : null;

    this.modal.open(targetModal, {
      size,
      backdrop: true,
      animation: true,
      keyboard: false,
      backdropClass: "modal-backdrop",
      centered: true
    });
  }

  guardarOrden(){
    this.displayedColumns = this.displayedColumns_aux;
  }

  eliminarItem(){
    if(this.items){
      const index = this.items.indexOf(this.items.find((item:any) => item['id'] === this.idSelected));
      this.items.splice(index, 1);
      this.dataSource = new MatTableDataSource<TornillosElement>(this.items);
      
        if(this.paginator){
          this.dataSource.paginator = this.paginator;
        }
      
    }
  }

  getNuevoProducto(event : any){
    this.items.push(event);
    this.dataSource = new MatTableDataSource<TornillosElement>(this.items);
    if(this.paginator){
      this.dataSource.paginator = this.paginator;
    }
  }
  

}