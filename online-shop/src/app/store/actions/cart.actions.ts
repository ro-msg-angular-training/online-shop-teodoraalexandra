import { Action } from '@ngrx/store';
import { Product } from "../../models/product";


export enum ECartActions {
  GetCartProducts = '[Product] Get Cart Products',
  GetCartProductsSuccess = '[Product] Get Cart Products Success',
}

export class GetCartProducts implements Action {
  public readonly type = ECartActions.GetCartProducts;
}

export class GetCartProductsSuccess implements Action {
  public readonly type = ECartActions.GetCartProductsSuccess;
  constructor(public payload: Product[]) {
  }
}

export type CartActions = GetCartProducts | GetCartProductsSuccess;
