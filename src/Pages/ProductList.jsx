import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import CompleteProducts from "../Components/CompleteProducts";
import Navbar from "../Components/Navbar";

function ProductList() {
  return (
    <>
      <Header />
      <Navbar />
      <CompleteProducts />
      <Footer />
    </>
  );
}

export default ProductList;
