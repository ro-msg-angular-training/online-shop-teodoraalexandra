import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {IAppState} from "../../store/state/app.state";
import {GetProducts} from "../../store/actions/product.actions";
import {selectProductList} from "../../store/selectors/product.selector";


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
  }
}
