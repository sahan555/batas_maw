import AtaGlance from "../../Component/About/AtaGlance";
import HistoryTab from "../../Component/About/HistoryTab";
import Mission from "../../Component/About/Mission";
import OurValues from "../../Component/About/OurValues";
import Vision from "../../Component/About/Vision";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import Testimonials from "../../Component/Global/Testimonials";
import useGet from "../../Global/Apis/useGet";
import { CeoWords } from "../../Global/Datas/AboutData";

const About = () => {
  const { data: about } = useGet("static-about");
  const { data: counters } = useGet("counters");
  return (
    <>
      <Breadcrumbs />
      <main className="about-page">
        <section className="about-banner relative z-0  bg-primary">
          <figure className="inset-0 z-[-1] h-[300px] lg:absolute lg:h-full">
            <img
              src="./assets/images/about.jpg"
              className="object-cover object-center"
              alt="Batas Maw"
            />
          </figure>
          <div className="side-padding">
            <div className="container mx-auto flex flex-wrap justify-end ">
              <div className="w-full lg:min-h-[500px] lg:w-[70%] xl:w-1/2">
                <div className="lg:skew-image relative bg-primary py-9 text-justify text-white lg:h-full lg:px-[12%] lg:py-[10%] xl:px-[15%] ">
                  <article>
                    <h1 className="mb-2 font-hermes-italic">
                      Company Overview
                    </h1>
                    <p className="text-sm leading-6 tracking-wide">
                      Since its inception, EAPL has sold more than 4500 vehicles
                      in Nepal till date. The corporate office located at Tangal
                      Chowk, Laxmi Narayan Temple, Kathmandu, and branches in
                      Birgunj, Hetauda, Itahari, Janakpur, Dhangadhi, Dang,
                      Surket, Birtamode & Nepalgunj along with joint operations
                      with local entrepreneurs in Pokhara, Narayanghat, Butwal,
                      Trishuli, Charikot, Dadeldhura, Katari, Ramechhap and
                      Sarlahi  deal with both sales and after sales services of
                      the vehicles and spare-parts as well. The dealership is
                      one of the largest in the country with professionals and
                      trained manpower in both sales as well as service setups
                      and is spread throughout the nation. The company employees
                      about 179 professionals and makes sure that each of our
                      employees provide you the best service. With the proven
                      performance of Eicher vehicles over past few years in the
                      demanding Nepalese terrain, today we are the market
                      leaders in the light commercial segment and the fastest
                      growing in the heavy segment.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-content section-break pb-32 text-center">
          <div className="side-padding">
            <div className="container mx-auto">
              <HistoryTab />
            </div>
          </div>
        </section>
        <Testimonials
          heading="Chairman Message"
          data={about}
          slider={false}
          right={true}
        />
        <AtaGlance data={counters} />
        <Mission />
        <Vision data={about} />
        <OurValues data={counters} />
      </main>
    </>
  );
};

export default About;
