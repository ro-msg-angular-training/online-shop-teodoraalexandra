import { Action } from '@ngrx/store';
import { Product } from "../../models/product";
import {OrderProduct} from "../../models/orderProduct";


export enum ECartActions {
  GetCartProducts = '[Product] Get Cart Products',
  GetCartProductsSuccess = '[Product] Get Cart Products Success',
  Checkout = 'Checkout'
}

export class GetCartProducts implements Action {
  public readonly type = ECartActions.GetCartProducts;
}

export class GetCartProductsSuccess implements Action {
  public readonly type = ECartActions.GetCartProductsSuccess;
  constructor(public payload: Product[]) {
  }
}

export class Checkout implements Action {
  public readonly type = ECartActions.Checkout;
  constructor(public customer: String, public productsInOrder: OrderProduct[]) {
  }
}

export type CartActions = GetCartProducts | GetCartProductsSuccess | Checkout;
