import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  //recibimos del componente padre la acción de desloguearse
  @Input() signOut: boolean | undefined;

  //emitimos la acción de loguearse
  @Output() signIn = new EventEmitter<boolean>();
  logueado: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem('logged') === 'true'){
      this.login(true);
    }
  }

  login(estado: boolean){
    console.log('Estoy haciendo LOGIN');
    this.logueado = estado;
    sessionStorage.setItem('logged', String(estado));
    this.signIn.emit(estado);
  }

}
