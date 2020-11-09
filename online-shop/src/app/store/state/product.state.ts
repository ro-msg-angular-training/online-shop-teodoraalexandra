import { Product } from "../../models/product";

export interface ProductState {
  products: Product[];
  selectedProduct: Product;
}

export const initialProductState: ProductState = {
  products: null,
  selectedProduct: null
};
