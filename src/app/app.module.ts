import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { ProductosProvider } from '../providers/productos/productos';
import { NoticiasProvider } from '../providers/noticias/noticias';
import { PedidosProvider } from '../providers/pedidos/pedidos';
import { ComponentsModule } from '../components/components.module';
import { IonicStorageModule } from '@ionic/storage';
import { CarritoProvider } from '../providers/carrito/carrito';
import { HttpClientModule } from '@angular/common/http';
import { AppAlertsProvider } from '../providers/app-alerts/app-alerts';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    ProductosProvider,
    NoticiasProvider,
    PedidosProvider,
    CarritoProvider,
    AppAlertsProvider
  ]
})
export class AppModule {}
