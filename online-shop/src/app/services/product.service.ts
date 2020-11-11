import {Injectable} from '@angular/core';
import {Product} from "../models/product";
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {createApolloFetch} from "apollo-fetch";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private graphQLURL = "http://localhost:4000/graphql";

  private fetch = createApolloFetch({
    uri: this.graphQLURL,
  });

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]> {
    const queryString = "{products {id, name, category, image, price, description}}";
    return Observable.create(observer => {
      this.fetch({
        query: queryString,
      }).then(res => {
        observer.next(res.data.products);
        observer.complete();
      });
    });
  }

  getProduct(id: Number): Observable<Product> {
    const queryString = "{product (id: " + id + ") {id, name, category, image, price, description}}";
    return Observable.create(observer => {
      this.fetch({
        query: queryString,
      }).then(res => {
        observer.next(res.data.product);
        observer.complete();
      });
    });
  }

  deleteProduct(id: Number): Observable<{}> {
    const queryString = "mutation { deleteProduct ( id: " + id + ")}";

    return Observable.create(observer => {
      this.fetch({
        query: queryString,
      }).then(res => {
        observer.complete();
      });
    });
  }

  addProduct(product: Product): Observable<{}> {
    const queryString = "mutation { createProduct( options: { name: \"" + product.name + "\", category: \"" + product.category + "\" , image: \"hardcoded_image\", price: " + product.price + ", description: \"hardcoded_description\"}) { id, name, category, image, price, description}}";

    return Observable.create(observer => {
      this.fetch({
        query: queryString,
      }).then(res => {
        observer.complete();
      });
    });
  }

  updateProduct(id: Number, product: Product): Observable<{}> {
    const queryString = "mutation { updateProduct( id: " + id + ", newProduct: { name: \"" + product.name + "\", category: \"" + product.category + "\" , image: \"hardcoded_image\", price: " + product.price + ", description: \"hardcoded_description\"})}";

    return Observable.create(observer => {
      this.fetch({
        query: queryString,
      }).then(res => {
        observer.complete();
      });
    });
  }
}
