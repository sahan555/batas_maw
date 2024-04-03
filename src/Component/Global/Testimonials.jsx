import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  var testiSlider = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="testimonals-section">
      <div className="container mx-auto">
        <div className="heading-wrapper">
          <h2 className="heading">Testimonials</h2>
        </div>
        <Slider {...testiSlider}>
          <div>
            <div className="client-box">
              <div className="client-content">
                <article>
                  <h4></h4>
                  <p></p>
                </article>
                <div className="client-testi">
                  <p></p>
                </div>
              </div>
              <figure>
                <img src="" alt="" />
              </figure>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
