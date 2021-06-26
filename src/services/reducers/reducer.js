import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

const initialState = {
  cartData: []
}

export default function cartItems(state = [], action)
{
  switch (action.type)
  {
    case ADD_TO_CART:
      // console.warn('reducer data', action)
      return [
        ...state,
        { cartData: action.data }
      ]

    case REMOVE_TO_CART:
      // console.warn('reducer data', action)
      state.pop();
      return [
        ...state,
      ]
    default:
      return state;
  }
}