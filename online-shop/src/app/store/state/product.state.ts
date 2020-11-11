import { Product } from "../../models/product";

export interface ProductState {
  products: any;
  selectedProduct: Product;
}

export const initialProductState: ProductState = {
  products: null,
  selectedProduct: null
};
