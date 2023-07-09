import React, { useEffect, useState } from "react";
import Data from "./../Data/data.json";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function ListProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (Data) {
      setData(Data.slice(0, 4));
    }
  }, []);
  return (
    <div className="third-container">
      <div className="third-container-inside">
        <h3>New ceramics</h3>
        <div className="t-3-elements">
          {data &&
            data.map((ele) => (
              <Link to={`/product/${ele.id}`} className="t3-element">
                <img src={ele.image} alt="" />
                <h4>{ele.name}</h4>
                <p>£{ele.price}</p>
              </Link>
            ))}
        </div>
        <div className="button-container">
          <button
            onClick={() => {
              navigate("/products");
            }}
          >
            View collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListProducts;
