import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import {switchMap, map, withLatestFrom, exhaustMap} from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
  GetProductsSuccess,
  EProductActions,
  GetProductSuccess,
  GetProduct,
  GetProducts,
  AddProduct,
  UpdateProduct,
  DeleteProduct
} from '../actions/product.actions';
import { ProductService } from "../../services/product.service";
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

  @Effect()
  add$ = this.actions$.pipe(
    ofType<AddProduct>(EProductActions.AddProduct),
    exhaustMap(action =>
      this.productService.addProduct(action.product)
    ),
    switchMap(() => this.productService.getProducts()),
    switchMap((productList: Product[]) => of(new GetProductsSuccess(productList)))
  );

  @Effect()
  update$ = this.actions$.pipe(
    ofType<UpdateProduct>(EProductActions.UpdateProduct),
    exhaustMap(action =>
      this.productService.updateProduct(action.id, action.product)
    ),
    switchMap(() => this.productService.getProducts()),
    switchMap((productList: Product[]) => of(new GetProductsSuccess(productList)))
  );

  @Effect()
  delete$ = this.actions$.pipe(
    ofType<DeleteProduct>(EProductActions.DeleteProduct),
    exhaustMap(action =>
      this.productService.deleteProduct(action.id)
    ),
    switchMap(() => this.productService.getProducts()),
    switchMap((productList: Product[]) => of(new GetProductsSuccess(productList)))
  );
}
