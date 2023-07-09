import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { CART_RESET } from "../Redux/constants/cartConstants";
import { v4 as uuid } from "uuid";
import Modal from "./Modal";
import CartItem from "./CartItem";

function Basket() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  let { loading, error, userInfo } = userLogin;
  const modalEl = useRef();

  //Calculate Subtotal and Set Subtotal
  if (cartItems) {
    cart.itemsPrice = cart.cartItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
    // cart.shippingPrice = 0;
    cart.taxPrice = 0;
    cart.totalPrice = Number(cart.itemsPrice) + Number(cart.taxPrice);
  }

  const CheckoutHandler = async () => {
    if (userInfo) {
      const collRef = doc(db, "orders", userInfo.uid);
      const docSnap = await getDoc(collRef);
      if (docSnap.exists()) {
        let data = docSnap.data().data;
        let orderId = uuid();
        data.push({
          id: orderId,
          paymentStatus: false,
          itemsPrice: cart.itemsPrice,
          orderItems: cartItems,
          totalPrice: cart.totalPrice,
        });

        const docRef = await setDoc(collRef, {
          data,
        }).then(async () => {
          await dispatch({
            type: CART_RESET,
          });
          navigate(`/order/${orderId}`);
        });
      } else {
        let orderId = uuid();
        const docRef = await setDoc(collRef, {
          data: [
            {
              id: orderId,
              paymentStatus: false,
              itemsPrice: cart.itemsPrice,
              orderItems: cartItems,
              totalPrice: cart.totalPrice,
            },
          ],
        }).then(async () => {
          await dispatch({
            type: CART_RESET,
          });
          navigate(`/order/${orderId}`);
        });
      }
    } else {
      navigate("/login?redirect=cart");
    }
  };
  useEffect(() => {
    const handler = (event) => {
      if (!modalEl.current) {
        return;
      }
      // if click was not inside of the element. "!" means not
      // in other words, if click is outside the modal element
      if (!modalEl.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    // the key is using the `true` option
    // `true` will enable the `capture` phase of event handling by browser
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  return (
    <div className="basket-main-container">
      {isModalOpen && <Modal ref={modalEl} />}

      <div className="basket-main-container-inside">
        <h1>Your shopping cart</h1>
        {cartItems && cartItems.length === 0 ? (
          <h1>No items here.</h1>
        ) : (
          <div className="basket-container-elements">
            <div className="bce-head">
              <h4 className="product-main">Product</h4>
              <h4>Quantity</h4>
              <h4 className="product-total">Total</h4>
            </div>
            <div className="bce-elements">
              {cartItems.map((item) => (
                <CartItem item={item} />
              ))}
            </div>
            <div className="total-subtotal">
              <div className="total-elements">
                <h1>
                  Subtotal <span> £{cart.totalPrice} </span>
                </h1>
                <p>Taxes and shipping are calculated at checkout</p>
                <button onClick={CheckoutHandler}>Go to checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Basket;
