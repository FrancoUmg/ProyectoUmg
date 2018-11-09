import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Producto } from '../../models/productos.interface';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductosProvider extends ApiProvider{

  constructor(public http: HttpClient) {
    super(http)
  }

  getProductos():any
  {
    // return this.get('productos')
  }
}
