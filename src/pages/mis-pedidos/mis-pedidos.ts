import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-mis-pedidos',
  templateUrl: 'mis-pedidos.html',
})
export class MisPedidosPage {

  pedidos: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.pedidos = [];
  }

  ionViewDidLoad() {
    this.getPedidos();
    console.log('ionViewDidLoad MisPedidosPage');
  }

  getPedidos() {
    this.pedidos = [
      {
        nombre:  'Pedido Para navidad',
        fecha: '10/12/2018',
        monto: 1200
      },
      {
        nombre:  'Segundo Pedido Para navidad',
        fecha: '5/12/2018',
        monto: 3200
      },
      {
        nombre:  'Tercer Pedido Para navidad',
        fecha: '1/12/2018',
        monto: 5200
      }
    ]
  }
}
