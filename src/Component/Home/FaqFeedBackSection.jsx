import Accordion from "../Global/Accordion";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ContactForm from "../Global/ContactForm";

const FaqFeedBackSection = () => {
  return (
    <>
      <section className="faq-feed-section section-break bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,1)_50%,_rgba(232,232,233,1)_50%,_rgba(232,232,233,1)_100%)]">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-1/2 pr-8">
              <div className="heading-wrapper mb-5">
                <h2 className="heading">faqs</h2>
              </div>
              <Accordion defaultIcon={<FaPlus />} expandIcon={<FaMinus />} />
              <div className="faq-ques py-6">
                <h4 className="mb-4">Feel free to ask your question</h4>
                <form action="">
                  <div className="form-control flex justify-between border-b border-light-grey pb-2 ">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="w-full outline-0 pr-4"
                    />
                    <button
                      type="submit"
                      className="btn-full px-6 py-1 text-sm font-normal before:bg-secondary hover:opacity-90"
                    >
                      Ask
                    </button>
                  </div>
                </form>
              </div>
              <div className="btn-wrapper">
                <Link
                  className="btn-transparent skew-btn inline-block px-8 py-2 uppercase text-primary before:border-primary hover:text-white hover:before:bg-primary"
                  to="/"
                >
                  View All FAQs
                </Link>
              </div>
            </div>
            <div className="w-1/2 pl-8">
              <div className="heading-wrapper mb-5">
                <h2 className="heading">Feedback form</h2>
              </div>
              <ContactForm/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqFeedBackSection;
