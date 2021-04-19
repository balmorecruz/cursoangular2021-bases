import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  
  personajes:Personaje[]=[{
    nombre:'Goku',
    poder:909090
  },{
    nombre:'Vegeta',
    poder:823000
  }];
  
nuevo:Personaje={
  nombre:'Bulma',
  poder:100
}

agregarNuevoPersonaje(argumento:Personaje){
  // debugger;
  this.personajes.push(argumento);
}
}

