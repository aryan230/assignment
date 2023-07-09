import React, { useEffect } from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Unique from "../Components/Unique";
import ListProducts from "../Components/ListProducts";
import ListProductsBig from "../Components/ListProductsBig";
import Footer from "../Components/Footer";
import CTA from "../Components/CTA";
import HomeAbout from "../Components/HomeAbout";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <Header />
      <Navbar />
      <Hero />
      <Unique />
      <ListProducts />
      <ListProductsBig />
      <CTA />
      <HomeAbout />
      <Footer />
    </div>
  );
}
