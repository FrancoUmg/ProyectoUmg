import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  dataLogin: {email: string, password: string};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    ) {
      this.dataLogin = {
        email: '',
        password:''
      }
      this.menu.enable(false);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin(data){
    this.navCtrl.setRoot('CarritoPage')
  }
}
