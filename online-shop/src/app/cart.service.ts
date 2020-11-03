import { Injectable } from '@angular/core';
import { Product } from "./model/product";
import { CART } from "./repository/mock-cart";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getProductsFromCart() : Product[] {
    return CART;
  }

  addProductToCart(product: Product) : void {
    CART.push(product);
  }
}
