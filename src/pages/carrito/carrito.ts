import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import { Producto } from '../../models/productos.interface';
import { ProductosCarritoComponent } from '../../components/productos-carrito/productos-carrito';
import { CarritoProvider } from '../../providers/carrito/carrito';
import { AppAlertsProvider } from '../../providers/app-alerts/app-alerts';

@IonicPage()
@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html',
})
export class CarritoPage {

  //propiedad para listado de productos
  productos: Array<Producto>
  //contador para llevar el numero de productos agregados al carrito
  carritoContador: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    public modalCtrl: ModalController,
    public carritoProvider: CarritoProvider,
    public alerts: AppAlertsProvider
  ) {
    this.menu.enable(true)
    this.productos = []
  }

  ionViewDidLoad() {
    this.getProductos();
    this.setContadorCarrito();
  }

  //abrir pagina de listado de carrito agregado
  abirCarrito(){
    this.navCtrl.push(ProductosCarritoComponent)
    // let modal = this.modalCtrl.create(ProductosCarritoComponent)
    // modal.present();
  }

  //setear valor al carrito
  async setContadorCarrito() {
    let productos = await this.carritoProvider.getStoreProductosCarrito();
    this.carritoContador = productos.length;
  }

  //agregar productos al carrito desde el componente carrito -- BUTTON +AGREGAR
  agregarProductoCarrito(producto) {
    console.log("rpdocut", producto)
    this.carritoProvider.guardarProductoCarrito(producto).then( (seIngreso) => {
      if (!seIngreso) {
        this.alerts.toastAlert('El producto ya fue agregado');
      } else {
        this.alerts.toastAlert('Producto agreado');
        this.setContadorCarrito();
      }
    }).catch( (err) => {
      this.alerts.toastAlert('Ocurrio un error');
    })
  }

  //obtener productos en memoria
  getProductos() {
    this.productos = [
      {
        costo:250,
        nombre: 'Camisa',
        descripcion: 'Camisa de para invierno',
        imagen: './assets/imgs/productos/camisa.jpg',
        id: 1,
      },
      {
        costo:350,
        nombre: 'Camisa Addidas',
        descripcion: 'Camisa Para salir a correr',
        imagen: './assets/imgs/productos/camisa.jpg',
        id: 2
      },
      {
        costo:400,
        nombre: 'Sudadera',
        descripcion: 'Sudadera bonita para salir',
        imagen: './assets/imgs/productos/camisa.jpg',
        id: 3
      },
      {
        costo:380,
        nombre: 'Sueter',
        descripcion: 'Sueter color negro adidas',
        imagen: './assets/imgs/productos/camisa.jpg',
        id: 4
      }
    ]
  }
}
