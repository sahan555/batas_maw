import React from "react";
import Article from "../../Component/Global/Article";
import { careerArticle, careerGallery } from "../../Global/Datas/CareerData";
import SliderNGallery from "../../Component/Global/SliderNGallery";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import GetReturn from "../../Component/About/Carrer/GetReturn";
import CareerOpenning from "../../Component/About/Carrer/CareerOpenning";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import { useRef } from "react";
import useGet from "../../Global/Apis/useGet";
import useScrollToElement from "../../Global/Hooks/useScrollToElement";

const Career = () => {
  const { data: about} = useGet("static-content");

  const { data: galleries } = useGet("galleries");

  const careerOpeningRef = useRef(null);
  const scrollToCareerOpening = useScrollToElement(careerOpeningRef);

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <IoIosArrowBack className="slick-arrow slick-prev text-primary" />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick}>
        <IoIosArrowForward className="slick-arrow slick-next text-primary" />
      </div>
    );
  };
  // Slider settings
  const sliderCareer = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    draggable: false,
    cssEase: "linear",
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Breadcrumbs />
      <section className="career-page">
        <div className="side-padding">
          <div className="container mx-auto pt-16">
            <Article
              title={careerArticle.title}
              headClass="!text-primary"
              desc={about?.about_career_team_desc}
              slug="#careerOpening"
              btnName="Current openings"
              grey={true}
              onButtonClick={scrollToCareerOpening}
            />
          </div>
        </div>
        <div className="career-gallery">
          <div className="side-padding">
            <div className="container mx-auto">
              <div className="heading-wrapper">
                <h3 className="heading mb-4">Life At Batas</h3>
              </div>
            </div>
          </div>
          <div className="gallery-wrapper section-break bg-grey">
            <div className="side-padding">
              <div className="container mx-auto">
                <div className="heading-wrapper mb-6 text-center">
                  <h4 className="heading !text-white">Annual Program</h4>
                </div>
                <SliderNGallery
                  Slidersetting={sliderCareer}
                  data={
                    galleries ? galleries?.gallery?.[0]?.images : careerGallery
                  }
                  transition={false}
                />
              </div>
            </div>
          </div>
        </div>
        <CareerOpenning ref={careerOpeningRef} />
        <GetReturn />
      </section>
    </>
  );
};

export default Career;
