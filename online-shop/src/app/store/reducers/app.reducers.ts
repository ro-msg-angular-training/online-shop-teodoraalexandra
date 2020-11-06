import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { productReducers } from "./product.reducers";
import { cartReducers } from "./cart.reducers";

export const appReducers: ActionReducerMap<IAppState, any> = {
  cart: cartReducers,
  router: routerReducer,
  products: productReducers
};
