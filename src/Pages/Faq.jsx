import React from "react";
import Breadcrumbs from "../Component/Global/BreadCrumbs";
import Accordion from "../Component/Global/Accordion";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Faq = () => {
  return (
    <>
      <Breadcrumbs />
      <section className="faq-page section-break  bg-light-grey bg-opacity-40">
        <div className="side-padding">
          <div className="mx-auto max-w-[1000px] rounded-lg border bg-white p-8">
            <div className="heading-wrapper relative mb-4 pl-12 ">
              <figure className="absolute left-0 top-[-4px] h-8 w-8 ">
                <img src="./assets/images/icons/question.png" alt="Faq" />
              </figure>
              <h1 className="heading !text-secondary">
                Frequently Asked Question
              </h1>
            </div>
            <div className="according-wrapper ">
              <Accordion
                defaultIcon={<FaPlus />}
                expandIcon={<FaMinus />}
                view={-1}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
