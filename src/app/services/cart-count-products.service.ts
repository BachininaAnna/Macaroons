import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class CartCountProductsService {
  public count: number = 0;
  public amountX10: number = 0;
  public listOfProducts: ProductType[] = [];

  public getAmount(): string {
    return (Math.floor(this.amountX10 / 10)).toString() + ',' + (this.amountX10 % 10).toString() + '0';
  }
   public getListOfProducts(){
     let str: string = '';
     this.listOfProducts.forEach(item =>{
       let count = 0;
       this.listOfProducts.forEach(elem => {
         if(item.title === elem.title){
           count++;
         }
       })
       if(!str.includes(item.title)){
         str += item.title + ' - ' + count + ' шт.; '
       }
     })
     return str
   }
}
