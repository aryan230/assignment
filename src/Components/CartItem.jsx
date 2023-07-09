import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/actions/cartActions";
function CartItem({ item }) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(item.qty);
  const maxQty = 10;
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  useEffect(() => {
    if (qty === 0) {
      removeFromCartHandler(item.product);
    }
  }, [qty]);
  return (
    <div className="bce-ele">
      <div className="bce-ele-one">
        <img src="./assets/basket/image.png" alt="" />
        <div className="bce-ele-one-inside">
          <h2>Graystone vase</h2>
          <p>A timeless ceramic vase with a tri color grey glaze.</p>
          <h3>£{item.price}</h3>
        </div>
      </div>
      <h4>
        <button
          onClick={() => {
            if (qty <= maxQty - 1) {
              setQty(qty + 1);
              dispatch(addToCart(item.product, Number(item.qty + 1)));
            }
            console.log("Add icon clicked");
          }}
        >
          {" "}
          <AddIcon />
        </button>

        {item.qty}
        <button
          onClick={() => {
            if (qty > 0) {
              setQty(qty - 1);
              dispatch(addToCart(item.product, Number(item.qty - 1)));
            }
            console.log("Add icon clicked");
          }}
        >
          {" "}
          <RemoveIcon />
        </button>
      </h4>
      <h4>£{Number(item.qty) * Number(item.price)}</h4>
    </div>
  );
}

export default CartItem;
