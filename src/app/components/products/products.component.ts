import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {CountingOneProductService} from "../../services/counting-one-product.service";
import {DataOfProductsService} from "../../services/data-of-products.service";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [CountingOneProductService, DataOfProductsService],
})
export class ProductsComponent implements OnInit {
  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  public products: ProductType[] = [];
  constructor(public countOneProduct: CountingOneProductService,
              public dataOfProducts: DataOfProductsService) {
    this.product = {
      image: '',
      title: '',
      price: ''
    }
    this.products = this.dataOfProducts.getFullDataOfProducts();
  }
  ngOnInit() {

  }
  addProductToCart() {
    this.addToCartEvent.emit(this.product);
    this.countOneProduct.count++;
  }
}
