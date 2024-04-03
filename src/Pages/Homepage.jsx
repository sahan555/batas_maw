import React from "react";
import HeroSection from "../Component/Home/HeroSection";
import ProductsTab from "../Component/Home/ProductsTab";
import HelpSection from "../Component/Home/HelpSection";
import NewsEvent from "../Component/Home/NewsEvent";
import ClientSection from "../Component/Home/ClientSection";

const Homepage = () => {
  return (
    <>
    <main className="home">
      <HeroSection/>
      <ProductsTab/>
      <HelpSection/>
      <NewsEvent/>
      <ClientSection/>
    </main>
    </>
  );
};

export default Homepage;
