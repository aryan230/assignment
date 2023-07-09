import React, { useEffect } from "react";
import Header from "../Components/Header";
import Basket from "../Components/Basket";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Navbar />
      <Basket />
      <Footer />
    </>
  );
}

export default Cart;
