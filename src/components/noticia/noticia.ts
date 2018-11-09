import { Component } from '@angular/core';

/**
 * Generated class for the NoticiaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'noticia',
  templateUrl: 'noticia.html'
})
export class NoticiaComponent {

  text: string;

  constructor() {
    console.log('Hello NoticiaComponent Component');
    this.text = 'Hello World';
  }

}
