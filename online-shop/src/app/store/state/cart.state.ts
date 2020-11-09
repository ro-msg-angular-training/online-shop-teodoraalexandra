import { Product } from "../../models/product";

export interface CartState {
  cartProducts: Product[];
}

export const initialCartState: CartState = {
  cartProducts: null
};
