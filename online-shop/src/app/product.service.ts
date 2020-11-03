import { Injectable } from '@angular/core';
import { Product } from "./model/product";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


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
}

// TODO: Active Products - Cart -> let user know where he is
