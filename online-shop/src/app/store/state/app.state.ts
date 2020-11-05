import { RouterReducerState } from '@ngrx/router-store';

import { ProductState, initialProductState } from './product.state';


export interface IAppState {
  router?: RouterReducerState;
  products: ProductState;
}

export const initialAppState: IAppState = {
  products: initialProductState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
