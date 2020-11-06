import { Injectable } from '@angular/core';
import { Product } from "../models/product";
import { OrderProduct } from "../models/orderProduct";
import { Order } from "../models/order";
import { CART } from "../repository/mock-cart";
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private orderURL = "http://localhost:3000/orders";
  private productURL = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }

  /*getProductsFromCart() : Product[] {
    return CART;
  }*/

  getProductsFromCart() : Observable<Product[]> {
    return this.http.get<Product[]>(this.productURL);
  }

  addProductToCart(product: Product) : void {
    CART.push(product);
  }

  createOrder(customer: String, productsInOrder: OrderProduct[]): Observable<Order> {
    let order: Order = {
      "customer": customer,
      "products": productsInOrder
    }
    return this.http.post<Order>(this.orderURL,
      order,
      {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    })
  }
}
