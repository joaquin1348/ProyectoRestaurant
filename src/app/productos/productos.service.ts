import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos = [

    {
      id: '1',
      titulo: 'cazuela',
      imagenURL: 'https://www.gourmet.cl/wp-content/uploads/2016/09/recetas-gourmet-marzo-2021-internet-7-1-570x458.jpg',
      comentarios: ['Rica cazuela', 'Especial para el frio ']
    },

    {
      id: '2',
      titulo: 'Porotos',
      imagenURL: 'https://www.enmicocinahoy.cl/wp-content/uploads/2012/07/porotos-riendas-scaled.jpg',
      comentarios: ['Ricos porotos', 'Rico Ricoooo']
    }


  ]


  constructor() { }

  //Buscar todos los productos
  getProductos(){

    //retornamos una lista de prod.
    return [...this.productos]
  }

  //Buscar todos los productos por id
  getProductosByid(productoId : string){

    //Se busca un elemento por id y se retorna un objeto
    this.productos.find( serv => {
      return serv.id == productoId
    })
  }

  //agregar productos
  addProductos(tit: string, imgURL: string){

    //agregamos un producto nuevo a la lista
    //id corresponde al ultimo elemento registrado +1
    this.productos.push(
      {
        id: this.productos.length+1 + "",
        titulo:tit,
        imagenURL:imgURL,
        comentarios:[]
      }
      
      )
  }

  //eliminar productos
  deleteProductos(productoId: string){
    this.productos = this.productos.filter(serv => {
                      return serv.id !== productoId
                    })
                  }
}
