import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../models/productos.interface';

@Component({
  selector: 'producto-component',
  templateUrl: 'producto.html'
})
export class ProductoComponent {


  @Input('productos') productos: Array<Producto>;
  @Output('agregar') agregar: any = new EventEmitter();
  constructor() {
    console.log('Hello ProductoComponent Component');
  }

  tapProducto(producto) {
    this.agregar.emit(producto)
  }
}
