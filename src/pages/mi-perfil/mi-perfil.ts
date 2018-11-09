import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mi-perfil',
  templateUrl: 'mi-perfil.html',
})
export class MiPerfilPage {

  datosPerfil: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.datosPerfil = {
        correo_electronico: 'octavio@gmail.com',
        fecha_nacimiento: new Date('08/08/1995').toISOString(),
        telefono: '651621651',
        direccion: 'El pajon pinula'
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiPerfilPage');
  }

  editarPerfil(datos){
    console.log("datos",datos)
  }
}
