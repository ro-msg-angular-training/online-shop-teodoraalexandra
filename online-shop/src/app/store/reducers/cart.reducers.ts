import { ECartActions } from "../actions/cart.actions";
import { CartActions} from "../actions/cart.actions";
import { initialCartState, CartState } from "../state/cart.state";


export const cartReducers = (
  state = initialCartState,
  action: CartActions
): CartState => {
  switch (action.type) {
    case ECartActions.GetCartProductsSuccess: {
      return {
        ...state,
        cartProducts: action.payload
      };
    }

    case ECartActions.Checkout: {
      return  {
        ...state,
        cartProducts: []
      }
    }

    default:
      return state;
  }
};
