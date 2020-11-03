import { Injectable } from '@angular/core';
import { Product } from "./model/product";
import { PRODUCTS } from "./repository/mock-products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }

  getProduct(id: Number): Product {
    return PRODUCTS.find(product => product.id === id);
  }
}
