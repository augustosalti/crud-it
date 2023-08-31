import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  showSpinner: boolean = true;
  logueado: boolean = false;
  enRevision: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  getSignIn(estado : boolean){  
    this.logueado = estado;
    !estado ? this.enRevision = false : null;
  }

  mostrarProductos(){
    this.showSpinner = true;
    this.enRevision = true;
    //hago desaparecer el spinner
    setTimeout(() => {
      this.showSpinner = false;
    }, 800);
  }

  //TABLE PAGINATION
  // https://stackblitz.com/edit/angular-mat-paginator?file=main.ts
  // https://material.angular.io/components/table/overview

}
