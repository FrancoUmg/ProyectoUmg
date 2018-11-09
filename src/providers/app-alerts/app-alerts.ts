import { Injectable } from '@angular/core';
import { ToastController, AlertController } from 'ionic-angular';

@Injectable()
export class AppAlertsProvider {

  constructor(
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
  ) {

  }


  toastAlert(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  alertPop(message,titulo){
    const alert = this.alertCtrl.create({
      title: titulo,
      message: message,
      buttons: ['OK']
    })
    return alert.present();
  }

}
