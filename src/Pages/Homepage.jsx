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
import useScrollToHash from "../Global/Hooks/useScrollToHash";
import GallerySection from "../Component/Home/GallerySection";
import useGet from "../Global/Apis/useGet";

const Homepage = () => {
  const { data: banners } = useGet("banners");
  const { data: testimonals, isLoading: testimonalsLoading } =
    useGet("testimonials");
  const { data: galleries } = useGet("galleries");
  const { data: staticData } = useGet("static-content");
  useScrollToHash(200);

  return (
    <>
      <main className="home">
        <HeroSection banners={banners} />
        <ProductsTab />
        <HelpSection data={staticData} />
        <MapSection />
        <NewsEvent />
        <ClientSection staticData={staticData} />
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
        <VideoSection data={galleries?.video} staticData={staticData} />
        <GallerySection data={galleries?.gallery} />
        <FaqFeedBackSection />
      </main>
    </>
  );
};

export default Homepage;
