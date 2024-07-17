import React from "react";
import useGet from "../Global/Apis/useGet";
import PopUp from "../Component/Global/PopUp";
import MetaHelmet from "./../Component/Global/MetaHelmet";
import { useLayoutData } from "../Global/Context/Layout";
import Slider from "react-slick";
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
import { Link } from "react-router-dom";
import Loading from "../Component/Global/Loading";

const Homepage = () => {
  const { settings, popup } = useLayoutData();
  const { data: banners ,isLoading} = useGet("banners");
  const { data: testimonals, isLoading: testimonalsLoading } =
    useGet("testimonials");
  const { data: galleries } = useGet("galleries");
  const { data: staticData } = useGet("static-content");
  useScrollToHash(200);
  var popupSider = {
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    adaptiveHeight: true,
  };
  if (isLoading || !banners) {
    return <Loading />;
  }
  return (
    <>
      <MetaHelmet
        title={
          settings?.meta_title !== undefined
            ? settings?.meta_title
            : "Batas Maw"
        }
      />
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
      {popup?.length > 0 ? (
        <PopUp onloadPop={true} delay={true}>
          {/* <figure>
            <img
              src="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.6435-9/118865820_1329157037254575_3980369753896957303_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=Su-IzUspx_cQ7kNvgG7mlTG&_nc_ht=scontent.fktm6-1.fna&oh=00_AYDJWDXUG3EosGFzk4N72uhREUYViwV0G25Kdq5AGw5BRw&oe=66AB3828"
              alt="schema"
            />
          </figure>  */}
          <div className="popup-slider custom-slider">
            <Slider {...popupSider}>
              {popup?.map((item) => (
                <Link
                  className="block"
                  key={item?.id}
                  to={`/vehicles/${item?.product?.slug}`}
                  onClick={(e) => item?.product ?? e.preventDefault()}
                >
                  <figure className="h-full">
                    <img
                      src={item?.image}
                      alt={`${item?.scheme_name ?? "schema"}`}
                    />
                  </figure>
                </Link>
              ))}
            </Slider>
          </div>
        </PopUp>
      ) : (
        ""
      )}
    </>
  );
};

export default Homepage;
