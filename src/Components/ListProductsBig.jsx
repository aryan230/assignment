import React from "react";
import { useNavigate } from "react-router-dom";

function ListProductsBig() {
  const navigate = useNavigate();
  return (
    <div className="fourth-container">
      <div className="third-container-inside">
        <h3>Our popular products</h3>
        <div className="t-3-elements">
          <div className="t3-element">
            <img src="./assets/popular/Large.png" alt="" />
            <h4>The Dandy chair</h4>
            <p>£250</p>
          </div>
          <div className="t3-element">
            <img src="./assets/inventory/photo-2.png" alt="" />
            <h4>The Dandy chair</h4>
            <p>£250</p>
          </div>
          <div className="t3-element">
            <img src="./assets/inventory/photo-3.png" alt="" />
            <h4>The Dandy chair</h4>
            <p>£250</p>
          </div>
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

export default ListProductsBig;
