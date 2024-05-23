import React from "react";
import HeroSection from "../Component/Home/HeroSection";
import ProductsTab from "../Component/Home/ProductsTab";
import HelpSection from "../Component/Home/HelpSection";
import NewsEvent from "../Component/Home/NewsEvent";
import ClientSection from "../Component/Home/ClientSection";
import Testimonials from "../Component/Global/Testimonials";
import EmiCalculator from "../Component/Global/EmiCalculator";
import VideoSection from "../Component/Home/VideoSection";
import FaqFeedBackSection from "../Component/Home/FaqFeedBackSection";
import { testiData } from "../Global/Datas/HomeData";
import MapSection from "../Component/Home/MapSection";
import GalleryPage from "../Component/Home/GalleryPage";

const Homepage = () => {
  return (
    <>
    <main className="home">
      <HeroSection/>
      <ProductsTab/>
      <HelpSection/>
      <MapSection/>
      <NewsEvent/>
      <ClientSection/>
      <Testimonials heading='Testimonials' data={testiData} slider={true} right={false}/>
      <EmiCalculator/>
      <VideoSection/>
      <GalleryPage/>
      <FaqFeedBackSection/>
    </main>
    </>
  );
};

export default Homepage;
