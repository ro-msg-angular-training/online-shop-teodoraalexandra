import { Action } from '@ngrx/store';
import { Product } from "../../models/product";


export enum EProductActions {
  GetProducts = '[Product] Get Products',
  GetProductsSuccess = '[Product] Get Products Success',
  GetProduct = '[Product] Get Product',
  GetProductSuccess = '[Product] Get Product Success',
  AddProduct = 'Add product',
  UpdateProduct = 'Update product',
  DeleteProduct = 'Delete product'
}

export class GetProducts implements Action {
  public readonly type = EProductActions.GetProducts;
}

export class GetProductsSuccess implements Action {
  public readonly type = EProductActions.GetProductsSuccess;
  constructor(public payload: Product[]) {}
}

export class GetProduct implements Action {
  public readonly type = EProductActions.GetProduct;
  constructor(public payload: number) {}
}

export class GetProductSuccess implements Action {
  public readonly type = EProductActions.GetProductSuccess;
  constructor(public payload: Product) {}
}

export class AddProduct implements Action {
  public readonly type = EProductActions.AddProduct;

  constructor(public product: Product) {}
}

export class UpdateProduct implements Action {
  public readonly type = EProductActions.UpdateProduct;

  constructor(public id: Number, public product: Product) {}
}

export class DeleteProduct implements Action {
  public readonly type = EProductActions.DeleteProduct;

  constructor(public id: Number) {}
}


export type ProductActions = GetProducts | GetProductsSuccess | GetProduct | GetProductSuccess | AddProduct | UpdateProduct | DeleteProduct;
