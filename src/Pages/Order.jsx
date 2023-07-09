import React, { useEffect } from "react";
import Header from "../Components/Header";
import OrderComponent from "../Components/OrderComponent";
import Footer from "../Components/Footer";

export default function Order() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <OrderComponent />
      <Footer />
    </div>
  );
}
