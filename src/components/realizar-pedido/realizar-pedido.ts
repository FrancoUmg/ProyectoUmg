import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { AppAlertsProvider } from '../../providers/app-alerts/app-alerts';
import { CarritoProvider } from '../../providers/carrito/carrito';

@Component({
  selector: 'realizar-pedido',
  templateUrl: 'realizar-pedido.html'
})
export class RealizarPedidoComponent {

  datosPedido: any;
  constructor(
    public navParams: NavParams,
    public appAlerts: AppAlertsProvider,
    public navCtrl: NavController,
    public carritoProvicder: CarritoProvider
  ) {
    this.datosPedido = {
      precio_pedido: this.navParams.get('precioPedido'),
      nombre_pedido: '',
      fecha_entrega: null
    }
    console.log("datosPedido", this.datosPedido)
  }

  hacerPedido(datosPedido){
    console.log("datosPedido", datosPedido)
    if(datosPedido.nombre_pedido && datosPedido.fecha_entrega) {
      this.appAlerts.alertPop('El pedido fue solicitado exitosamente','Pedido');
      this.navCtrl.setRoot('CarritoPage');
      this.carritoProvicder.setStoreProductoCarrito([]);
    } else{
      this.appAlerts.alertPop('Escribir el nombre del producto y escoger una fecha de entrega','Error')
    }
  }
}
