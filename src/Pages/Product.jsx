import React, { useEffect } from "react";
import ProductHeader from "../Components/Product/ProductHeader";
import ProductMain from "../Components/Product/ProductMain";
import ListProductsBig from "../Components/ListProductsBig";
import Footer from "../Components/Footer";
import ListProducts from "../Components/ListProducts";
import Unique from "../Components/Unique";
import CTA from "../Components/CTA";

function Product() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProductHeader />
      <ProductMain />
      <div className="fourth-container">
        <div className="third-container-inside">
          <h3>Our popular products</h3>
          <div className="t-3-elements">
            <div className="t3-element">
              <img src="../assets/popular/Large.png" alt="" />
              <h4>The Dandy chair</h4>
              <p>£250</p>
            </div>
            <div className="t3-element">
              <img src="../assets/inventory/photo-2.png" alt="" />
              <h4>The Dandy chair</h4>
              <p>£250</p>
            </div>
            <div className="t3-element">
              <img src="../assets/inventory/photo-3.png" alt="" />
              <h4>The Dandy chair</h4>
              <p>£250</p>
            </div>
          </div>
          <div className="button-container">
            <button>View collection</button>
          </div>
        </div>
      </div>
      <Unique />
      <CTA />
      <Footer />
    </>
  );
}

export default Product;
