import AtaGlance from "../../Component/About/AtaGlance";
import HistoryTab from "../../Component/About/HistoryTab";
import Mission from "../../Component/About/Mission";
import OurValues from "../../Component/About/OurValues";
import Vision from "../../Component/About/Vision";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import HtmlParse from "../../Component/Global/HtmlParse";
import Loading from "../../Component/Global/Loading";
import MetaHelmet from "../../Component/Global/MetaHelmet";
import Testimonials from "../../Component/Global/Testimonials";
import useGet from "../../Global/Apis/useGet";
import { useLayoutData } from "../../Global/Context/Layout";
import useScrollToHash from "../../Global/Hooks/useScrollToHash";

const About = () => {
  const { settings } = useLayoutData();

  const { data: about,isLoading } = useGet("static-content");
  const { data: counters } = useGet("counters");
  useScrollToHash(100);
  if (isLoading || !about) {
    return <Loading />;
  }
  return (
    <>
      <MetaHelmet title={`Company | ${settings?.meta_title !== undefined? settings?.meta_title :'Batas Maw'}`} />
      <Breadcrumbs />
      <main className="about-page">
        <section className="about-banner relative z-0  bg-primary bg-opacity-15">
          <figure className="inset-0 z-[-1] h-[300px] lg:absolute lg:h-full">
            <img
              src={about?.about_company_overview_image}
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
                    <div className="text-sm leading-6 tracking-wide">
                      <HtmlParse data={about?.about_company_overview_desc} />
                    </div>
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
        <section id="mission">
          <Mission />
        </section>
        <Vision data={about} />
        <OurValues data={counters} />
      </main>
    </>
  );
};

export default About;
