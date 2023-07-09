import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Data from "./../../Data/data.json";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/actions/cartActions";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function ProductMain() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState();
  const { id } = useParams();
  const [added, setAdded] = useState(false);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = async () => {
    dispatch(addToCart(id, amount));
    setAdded(true);
  };

  const checkCartButton = (cartItems, currProductID) => {
    if (cartItems) {
      const existItem = cartItems.find((x) => x.product == currProductID);
      if (existItem) {
        console.log("exist");
        setAdded(true);
        setAmount(existItem.qty);
        return {
          check: true,
          existPrice: existItem.price,
          existQty: existItem.qty,
        };
      } else {
        console.log("not exist");
        setAdded(false);
        return {
          check: false,
        };
      }
    }
  };

  useEffect(() => {
    Data.forEach((doc) => {
      if (doc.id == id) {
        setData(doc);
      }
    });
  }, []);

  useEffect(() => {
    checkCartButton(cartItems, id);
  }, []);
  return (
    <div className="main-container-product">
      <div className="main-left" />
      <div className="main-right">
        {added ? (
          <div className="main-right-container">
            <DeleteOutlineIcon className="fixed-element" />
            <div className="mrc-top">
              <h1>The Dandy Chair</h1>
              <h2>£{data && data.price}</h2>
              <p>Description</p>
              <p className="satoshi">
                A timeless design, with premium materials features as one of our
                most popular and iconic pieces. The dandy chair is perfect for
                any stylish living space with beech legs and lambskin leather
                upholstery.
              </p>
              <ul>
                <li>Premium material</li>
                <li>Handmade upholstery</li>
                <li>Quality timeless classic</li>
              </ul>
              <div className="dimension">
                <h4>Dimensions</h4>
                <div className="dimension-inside">
                  <div className="dimension-head">
                    <p>Height</p>
                    <p>Width</p>
                    <p>Depth</p>
                  </div>
                  <div className="dimenisons">
                    <p className="satoshi">110cm</p>
                    <p className="satoshi">75cm</p>
                    <p className="satoshi">50cm</p>
                  </div>
                </div>
              </div>
              <div className="input-take">
                <div className="input-elements">
                  <label htmlFor="amount">Amount:</label>
                  <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => {
                      setAdded(false);
                      setAmount(e.target.value);
                    }}
                  />
                </div>
                <button
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  Continue to cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="main-right-container">
            <div className="mrc-top">
              <h1>The Dandy Chair</h1>
              <h2>£{data && data.price}</h2>
              <p>Description</p>
              <p className="satoshi">
                A timeless design, with premium materials features as one of our
                most popular and iconic pieces. The dandy chair is perfect for
                any stylish living space with beech legs and lambskin leather
                upholstery.
              </p>
              <ul>
                <li>Premium material</li>
                <li>Handmade upholstery</li>
                <li>Quality timeless classic</li>
              </ul>
              <div className="dimension">
                <h4>Dimensions</h4>
                <div className="dimension-inside">
                  <div className="dimension-head">
                    <p>Height</p>
                    <p>Width</p>
                    <p>Depth</p>
                  </div>
                  <div className="dimenisons">
                    <p className="satoshi">110cm</p>
                    <p className="satoshi">75cm</p>
                    <p className="satoshi">50cm</p>
                  </div>
                </div>
              </div>
              <div className="input-take">
                <div className="input-elements">
                  <label htmlFor="amount">Amount:</label>
                  <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <button onClick={addToCartHandler}>Add to cart</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductMain;
