import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductType} from "./types/product.type";
import {FormValuesType} from "./types/formValues.type";
import {DataOfProductsService} from "./services/data-of-products.service";
import {CartCountProductsService} from "./services/cart-count-products.service";
import {ProductsComponent} from "./components/products/products.component";
import {FormatPhoneNumberPipe} from "./pipes/format-phone-number.pipe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CartCountProductsService, FormatPhoneNumberPipe],
})
export class AppComponent implements OnInit {
  public products: ProductType[] = [];
  public showPresent: boolean = true;
  public phoneNumber: string  = '375293689868';
  public instagram: string = 'https://www.instagram.com';

  public formValues: FormValuesType = {
    productTitle: '',
    nameUser: '',
    phone: ''
  }
  private openClass: boolean = false;

  @ViewChild(ProductsComponent)
  public productComp: ProductsComponent | undefined;

  constructor(public dataOfProducts: DataOfProductsService,
              public cartCountService: CartCountProductsService,
              private formatPhonePipe: FormatPhoneNumberPipe) {
  }

  ngOnInit() {
    this.products = this.dataOfProducts.getFullDataOfProducts();
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToCart(product: ProductType): void {
    this.cartCountService.count++;
    this.cartCountService.amountX10 += parseFloat(product.price) * 10;
    this.cartCountService.listOfProducts.push(product);
    alert(product.title + ' добавлен в корзину');
    this.formValues.productTitle = this.cartCountService.getListOfProducts();
  }

  public createOrder() {
    if (!this.formValues.productTitle) {
      alert("Заполните все поля");
      return;
    }
    if (!this.formValues.nameUser) {
      alert("Заполните все поля");
      return;
    }
    if (!this.formValues.phone) {
      alert("Заполните все поля");
      return;
    }
    if (this.formValues.phone.toString().replace(/\D/g, '').length < 12){
      alert("Неправильный формат номера");
      return;
    }
    alert("Спасибо за заказ!  " + this.formValues.productTitle);

    location.reload();

    this.cartCountService.count = 0;
    this.cartCountService.amountX10 = 0;
    this.cartCountService.listOfProducts = [];
    this.formValues = {
      productTitle: '',
      nameUser: '',
      phone: ''
    }
  }

  onClick(element: HTMLElement): void {
    if (this.openClass) {
      element.classList.remove('open');
      this.openClass = false;
    } else {
      element.classList.add('open');
      this.openClass = true;
    }
  }
}
