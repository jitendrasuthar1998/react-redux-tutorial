import ADD_TO_CART from '../constants';
export const addToCart = (data) =>
{
  console.warn("Action data", data)
  return {
    type: ADD_TO_CART,
    data: data
  }
}
