import { Component, OnInit } from '@angular/core';
import { CartService } from "../../services/cart.service";
import { Product } from "../../models/product";
import { OrderProduct } from "../../models/orderProduct";


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

  checkout() {
    let productsForOrder: OrderProduct[] = [];
    this.productsInCart.forEach(product => {
      const productForOrder: OrderProduct = {
        "productId": product.id,
        "quantity": 1
      }
      productsForOrder.push(productForOrder);
    });

    const customer: String = "doej";

    // Checkout will be done in service
    this.cartService.createOrder(customer, productsForOrder).subscribe();

    // Delete everything from cart (locally)
    this.productsInCart = [];

    // Alert a successfully message
    alert("Thank you for your order, " + customer + "!");
  }
}
