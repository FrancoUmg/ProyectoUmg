import { Component } from '@angular/core';
import { NavParams, ViewController, IonicPage, NavController } from 'ionic-angular';
import { CarritoProvider } from '../../providers/carrito/carrito';
import { Producto } from '../../models/productos.interface';
import { RealizarPedidoComponent } from '../realizar-pedido/realizar-pedido';

@Component({
  selector: 'productos-carrito',
  templateUrl: 'productos-carrito.html'
})
export class ProductosCarritoComponent {

  productos: Producto[];
  precioPedido: number;
  constructor(
    public navParms: NavParams,
    public viewCtrl: ViewController,
    public carritoProvider: CarritoProvider,
    public navCtrl: NavController
  ) {
    this.productos = [];
  }

  ionViewDidLoad() {
    this.getProductosCarrito();
  }

  dismiss() {
    this.viewCtrl.dismiss()
  }

  getProductosCarrito(){
    this.carritoProvider.getStoreProductosCarrito().then((productos) => {
      console.log('producots', productos)
      this.productos = productos.map((e) => {
          e.pedido = 1;
          return e;
      });
      this.setPreciPedido(this.productos);
    }, err => {
      console.log('eerr',err)
    })
  }

  setPreciPedido(productos) {
    this.precioPedido = productos.reduce( (contador, producto) => {
      contador += producto.costo * producto.pedido;
      return contador;
    },0)
    console.log('precioPedido', this.precioPedido)

  }

  disminuirPedido(producto){
    producto.pedido > 1 ? producto.pedido-- : null;
    this.setPreciPedido(this.productos)
  }

  incrementarPedido(producto){
    producto.pedido++;
    this.setPreciPedido(this.productos)
  }

  realizarPedido(productos){
    console.log('productos',productos)
    console.log('precioPedido', this.precioPedido)

    this.navCtrl.push(RealizarPedidoComponent,{productos: productos, precioPedido: this.precioPedido})
  }
}
