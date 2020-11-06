import { ECartActions } from "../actions/cart.actions";
import { CartActions} from "../actions/cart.actions";
import { initialCartState, CartState } from "../state/cart.state";

export const cartReducers = (
  state = initialCartState,
  action: CartActions
): CartState => {
  switch (action.type) {
    case ECartActions.GetCartProductsSuccess: {
      console.log("cart reducer: ", action)
      return {
        ...state,
        cartProducts: action.payload
      };
    }

    default:
      return state;
  }
};
