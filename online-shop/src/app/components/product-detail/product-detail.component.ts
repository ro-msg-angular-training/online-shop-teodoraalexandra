import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import {Store, select} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {selectSelectedProduct} from "../../store/selectors/product.selector";
import {GetProduct } from "../../store/actions/product.actions";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product$ = this._store.pipe(select(selectSelectedProduct));

  constructor(
    private route: ActivatedRoute,
    private _store: Store<IAppState>,
  ) { }

  ngOnInit(): void {
    this._store.dispatch(new GetProduct(this.route.snapshot.params.id));
  }
}
