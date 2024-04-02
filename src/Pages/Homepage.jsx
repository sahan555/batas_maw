import React from "react";
import HeroSection from "../Component/Home/HeroSection";
import ProductsTab from "../Component/Home/ProductsTab";

const Homepage = () => {
  return (
    <>
    <main className="home">
      <HeroSection/>
      <ProductsTab/>
    </main>
    </>
  );
};

export default Homepage;
