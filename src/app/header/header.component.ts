import { Component, OnInit, Output, EventEmitter } from '@angular/core';
const $ = (window as any)['jQuery'];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() seleccionMenu = new EventEmitter<string>();

  constructor() { }

  onClickMenu(seleccion: string) {
    this.seleccionMenu.emit(seleccion);
   }

  ngOnInit(): void {

  /* Cuando se le de click a los enlaces del menu del movil, se cerrará el menú completo */
    $( '.menus-mobile a' ).click(function() {
      $( '.c-menu__close' ).click();
    });

  }

}
