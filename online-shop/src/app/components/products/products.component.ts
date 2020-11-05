import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {IAppState} from "../../store/state/app.state";
import {GetProducts} from "../../store/actions/product.actions";
import {selectProductList} from "../../store/selectors/product.selector";
import {Product} from "../../models/product";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$ = this._store.pipe(select(selectProductList));
  constructor(private _store: Store<IAppState>) { }

  ngOnInit(): void {
    this._store.dispatch(new GetProducts());
    //this.getProducts();
  }

  getProducts() : void {
    /*this.productService.getProducts().subscribe(
      data => {
        this.products = data;
      },
      err => {
        console.log(err);
      }
    );*/

  }
}
