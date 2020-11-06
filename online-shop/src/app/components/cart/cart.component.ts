import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {IAppState} from "../../store/state/app.state";
import {GetCartProducts} from "../../store/actions/cart.actions";
import {selectCartProductList} from "../../store/selectors/cart.selector";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart$ = this._store.pipe(select(selectCartProductList));
  constructor(private _store: Store<IAppState>) { }

  ngOnInit(): void {
    this._store.dispatch(new GetCartProducts());
  }

  checkout() {
    /*let productsForOrder: OrderProduct[] = [];
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
    alert("Thank you for your order, " + customer + "!");*/
  }
}
