import { Injectable } from '@angular/core';
import { Product } from "../models/product";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductHttp } from "../models/http-models/product-http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productURL = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.productURL);
  }

  getProduct(id: Number): Observable<Product> {
    return this.http.get<Product>(this.productURL + "/" + id);
  }

  deleteProduct(id: Number): Observable<{}> {
    return this.http.delete(this.productURL + "/" + id);
  }

  addProduct(product: Product): Observable<{}> {
    return this.http.post(this.productURL, product);
  }

  updateProduct(id: Number, product: Product): Observable<{}> {
    return this.http.put(this.productURL + "/" + id, product);
  }
}
