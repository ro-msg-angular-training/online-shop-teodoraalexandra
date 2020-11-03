import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";
import { Product } from "../model/product";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsInCart: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsInCart = this.cartService.getProductsFromCart();
  }

  // TODO: create button of checkout
  // Flow: get all products from ProductsInCart and post them as an order to the backend
  // Delete everything locally from cart
  // Alert a successful message
  // Redirect to products page
}
