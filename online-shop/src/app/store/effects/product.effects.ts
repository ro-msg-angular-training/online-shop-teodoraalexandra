import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
  GetProductsSuccess,
  EProductActions,
  GetProductSuccess,
  GetProduct,
  GetProducts
} from '../actions/product.actions';
import { ProductService } from "../../services/product.service";
import { ProductHttp } from "../../models/http-models/product-http";
import { selectProductList } from "../selectors/product.selector";
import {Product} from "../../models/product";

@Injectable()
export class ProductEffects {

  constructor(
    private productService: ProductService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {}

  @Effect()
  getProduct$ = this.actions$.pipe(
    ofType<GetProduct>(EProductActions.GetProduct),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectProductList))),
    switchMap(([id, products]) => {
      const selectedProduct = products.filter(product => product.id === +id)[0];
      return of(new GetProductSuccess(selectedProduct));
    })
  );

  @Effect()
  getProducts$ = this.actions$.pipe(
    ofType<GetProducts>(EProductActions.GetProducts),
    switchMap(() => this.productService.getProducts()),
    switchMap((productList: Product[]) => of(new GetProductsSuccess(productList)))
  );
}
