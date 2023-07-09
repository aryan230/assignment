import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";

function OrderComponent() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  let { loading, error, userInfo } = userLogin;
  const [data, setData] = useState();

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (userInfo) {
      const unsub = onSnapshot(doc(db, "orders", userInfo.uid), (doc) => {
        if (doc.data().data) {
          const findIndex = doc.data().data.find((a) => a.id == id);

          if (findIndex) {
            setData(findIndex);
          }
        }
      });
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="basket-main-container">
      <div className="basket-main-container-inside">
        <h1>We are shipping your Order.</h1>
        <p>Order ID - {id}</p>
        {!data ? (
          <h1>No order Found .</h1>
        ) : (
          <div className="basket-container-elements">
            <div className="bce-head">
              <h4 className="product-main">Product</h4>
              <h4>Quantity</h4>
              <h4 className="product-total">Total</h4>
            </div>
            <div className="bce-elements">
              {data &&
                data.orderItems.map((item) => (
                  <div className="bce-ele">
                    <div className="bce-ele-one">
                      <img src="../assets/basket/image.png" alt="" />
                      <div className="bce-ele-one-inside">
                        <h2>Graystone vase</h2>
                        <p>
                          A timeless ceramic vase with a tri color grey glaze.
                        </p>
                        <h3>£{item.price}</h3>
                      </div>
                    </div>
                    <h4>{item.qty}</h4>
                    <h4>£{Number(item.qty) * Number(item.price)}</h4>
                  </div>
                ))}
            </div>
            <div className="total-subtotal">
              <div className="total-elements">
                <h1>
                  Subtotal <span> £{data && data.totalPrice} </span>
                </h1>
                <p>Taxes and shipping are calculated at checkout</p>
                <button>Having Trouble?</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderComponent;
