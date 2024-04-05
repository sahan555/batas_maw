import React from "react";
import HeroSection from "../Component/Home/HeroSection";
import ProductsTab from "../Component/Home/ProductsTab";
import HelpSection from "../Component/Home/HelpSection";
import NewsEvent from "../Component/Home/NewsEvent";
import ClientSection from "../Component/Home/ClientSection";
import Testimonials from "../Component/Global/Testimonials";
import EmiCalculator from "../Component/Global/EmiCalculator";
import VideoSection from "../Component/Home/VideoSection";
import Gallery from "../Component/Global/Gallery";
import FaqFeedBackSection from "../Component/Home/FaqFeedBackSection";

const Homepage = () => {
  return (
    <>
    <main className="home">
      <HeroSection/>
      <ProductsTab/>
      <HelpSection/>
      <NewsEvent/>
      <ClientSection/>
      <Testimonials/>
      <EmiCalculator/>
      <VideoSection/>
      <Gallery/>
      <FaqFeedBackSection/>
    </main>
    </>
  );
};

export default Homepage;
