import { NgModule } from '@angular/core';
import { ProductoComponent } from './producto/producto';
import { NoticiaComponent } from './noticia/noticia';
import { IonicPageModule } from 'ionic-angular';
import { ProductosCarritoComponent } from './productos-carrito/productos-carrito';
import { RealizarPedidoComponent } from './realizar-pedido/realizar-pedido';
@NgModule({
	declarations: [
    ProductoComponent,
    NoticiaComponent,
    ProductosCarritoComponent,
    RealizarPedidoComponent
  ],
	imports: [
    IonicPageModule
  ],
	exports: [
    ProductoComponent,
    NoticiaComponent,
    ProductosCarritoComponent,
    RealizarPedidoComponent
  ],
  entryComponents:[
    ProductosCarritoComponent,
    RealizarPedidoComponent
  ]
})
export class ComponentsModule {}
