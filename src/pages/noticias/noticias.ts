import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  noticias: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
      this.noticias = []
  }

  ionViewDidLoad() {
    this.getNoticias();
  }

  getNoticias() {
    this.noticias = [
      {
        titulo: 'Nuevos Productos',
        descripcion: "Hay nuevos productos en nuestro stock",
        fecha: "05/11/2018"
      },
      {
        titulo: 'Nuevos Productos de Navidad',
        descripcion: "Hay nuevos productos para Navidad en nuestro stock",
        fecha: "05/11/2018"
      },
      {
        titulo: 'Nuevos Productos para el blackFriday',
        descripcion: "Productos en oferta",
        fecha: "05/11/2018"
      },
    ]
  }
}
