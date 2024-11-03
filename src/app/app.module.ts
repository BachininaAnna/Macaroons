import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {DataOfProductsService} from "./services/data-of-products.service";
import {AdvantagesComponent} from './components/advantages/advantages.component';
import {ProductsComponent} from './components/products/products.component';
import {BackgroundColorBtnDirective} from './directives/background-color-btn.directive';
import {TextResizePipe} from './pipes/text-resize.pipe';
import {FormatPhoneNumberPipe} from './pipes/format-phone-number.pipe';
import {CartCountProductsService} from "./services/cart-count-products.service";

@NgModule({
  declarations: [
    AppComponent,
    AdvantagesComponent,
    ProductsComponent,
    BackgroundColorBtnDirective,
    TextResizePipe,
    FormatPhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataOfProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
