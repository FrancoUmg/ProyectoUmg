import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //propiedad para llevar el control de la pagina activa
  rootPage:any = 'WelcomePage';

  //propiedad para guardar las paginas el menu
  pages: Array<{title: string, component: any}>;

  laGringaDeRafa = "David!"

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Carrito', component: 'CarritoPage' },
      { title: 'Mis pedidos', component: 'MisPedidosPage' },
      { title: 'Noticias', component: 'NoticiasPage' },
      { title: 'Mi perfil', component: 'MiPerfilPage' },
      { title: 'Acerca de', component: 'AcercaDePage' },
    ];

  }

  //Funcion que indica cuando la aplicacion esta lista para usarse
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  //Abre la pagina tapeada o clickeada
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
