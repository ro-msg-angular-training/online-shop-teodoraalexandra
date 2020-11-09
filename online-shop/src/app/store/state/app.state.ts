import { RouterReducerState } from '@ngrx/router-store';

import { ProductState, initialProductState } from './product.state';
import { CartState, initialCartState } from "./cart.state";


export interface IAppState {
  router?: RouterReducerState;
  products: ProductState;
  cart: CartState;
}

export const initialAppState: IAppState = {
  products: initialProductState,
  cart: initialCartState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
