import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import {
  GetCartProductsSuccess,
  ECartActions,
  GetCartProducts
} from '../actions/cart.actions';
import { CartService} from "../../services/cart.service";
import {Product} from "../../models/product";

@Injectable()
export class CartEffects {

  constructor(
    private cartService: CartService,
    private actions$: Actions
  ) {}

  @Effect()
  getCartProducts$ = this.actions$.pipe(
    ofType<GetCartProducts>(ECartActions.GetCartProducts),
    switchMap(() => this.cartService.getProductsFromCart()),
    switchMap((productList: Product[]) => of(new GetCartProductsSuccess(productList)))
  );
}
