import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class DataOfProductsService {
  public getFullDataOfProducts(): ProductType[] {
    return [
      {
        image: 'macaroon1.png',
        title: 'Макарун с малиной',
        price: '1.70'
      },
      {
        image: 'macaroon2.png',
        title: 'Макарун с манго',
        price: '1.70'
      },
      {
        image: 'macaroon3.png',
        title: 'Пирог с ванилью',
        price: '1.70'
      },
      {
        image: 'macaroon4.png',
        title: 'Пирог с фисташками',
        price: '1.70'
      }
    ]
  }
}
