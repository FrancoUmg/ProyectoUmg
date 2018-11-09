import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarritoPage } from './carrito';
import { ComponentsModule } from '../../components/components.module';
import { CarritoProvider } from '../../providers/carrito/carrito';

@NgModule({
  declarations: [
    CarritoPage,
  ],
  imports: [
    IonicPageModule.forChild(CarritoPage),
    ComponentsModule
  ]
})
export class CarritoPageModule {}
