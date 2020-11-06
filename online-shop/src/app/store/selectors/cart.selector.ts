import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { CartState} from "../state/cart.state";

const selectCartProducts = (state: IAppState) => state.cart;

export const selectCartProductList = createSelector(
  selectCartProducts,
  (state: CartState) => state.cartProducts
);

