import { Component, OnInit } from '@angular/core';
//importamos la clase del servicio
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  private productos = []

  //el constructor utiliza el servicio y este servicio ahora es parte del html
  constructor(private servicioProductos: ProductosService) { }

  ngOnInit() {
      //utilizamos el servicio , el metodo buscar
      this.productos = this.servicioProductos.getProductos();
  }

}
