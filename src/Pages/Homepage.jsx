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
import useGet from "../Global/Apis/useGet";

const Homepage = () => {
  const { data: testimonals, isLoading: testimonalsLoading } =
    useGet("testimonials");
  const { data: galleries, isLoading: galleriesLoading } = useGet("galleries");
  return (
    <>
      <main className="home">
        <HeroSection />
        <ProductsTab />
        <HelpSection />
        <MapSection />
        <NewsEvent />
        <ClientSection />
        {testimonalsLoading ? (
          ""
        ) : (
          <Testimonials
            heading="Testimonials"
            data={testimonals ? testimonals : testiData}
            slider={true}
            right={false}
          />
        )}
        <EmiCalculator />
        <VideoSection data={galleries?.video} />
        <GalleryPage data={galleries?.gallery} />
        <FaqFeedBackSection />
      </main>
    </>
  );
};

export default Homepage;
