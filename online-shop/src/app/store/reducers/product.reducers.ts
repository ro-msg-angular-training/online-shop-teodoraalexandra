import { EProductActions} from "../actions/product.actions";
import { ProductActions } from '../actions/product.actions';
import { initialProductState, ProductState } from "../state/product.state";


export const productReducers = (
  state = initialProductState,
  action: ProductActions
): ProductState => {
  switch (action.type) {
    case EProductActions.GetProductsSuccess: {
      return {
        ...state,
        products: action.payload
      };
    }
    case EProductActions.GetProductSuccess: {
      return {
        ...state,
        selectedProduct: action.payload
      };
    }

    case EProductActions.AddProduct: {
      return {
        ...state
      }
    }

    case EProductActions.UpdateProduct: {
      return {
        ...state
      }
    }

    case EProductActions.DeleteProduct: {
      return {
        ...state
      }
    }

    default:
      return state;
  }
};
