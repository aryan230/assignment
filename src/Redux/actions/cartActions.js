import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADRESS,
} from "../constants/cartConstants";
import Completedata from "../../Data/data.json";
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const data = await Completedata.find((value) => value.id == id);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.id,
      name: data.name,
      image: data.image,
      price: data.price,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAdress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADRESS,
    payload: data,
  });

  localStorage.setItem("shippingAdress", JSON.stringify(data));
};
