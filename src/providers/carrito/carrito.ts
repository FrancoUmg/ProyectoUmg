import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Storage } from '@ionic/storage';

@Injectable()
export class CarritoProvider extends ApiProvider{

  constructor(
    public http: HttpClient,
    public storage: Storage
  ) {
    super(http)
  }

  async setStoreProductoCarrito(productos:Array<any>) {
    await this.storage.set('my-carrito',productos)
    return productos;
  }

  async getStoreProductosCarrito() {
    let productos = await this.storage.get('my-carrito');
    if(productos){
      return productos;
    } else {
      this.setStoreProductoCarrito([])
      return []
    }
  }

  async guardarProductoCarrito(productoNuevo) {
    let productos = await this.getStoreProductosCarrito();

    let indexExistente = productos.findIndex( (producto) => {
        return producto.id == productoNuevo.id
    })

    if (indexExistente != -1) {
      return false;
    } else {
      productos.push(productoNuevo);
      return await this.setStoreProductoCarrito(productos);
    }
  }

}
