import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

const FaqFeedBackSection = () => {
  return (
    <>
      <section className="faq-feed-section bg-light-grey from-white to-light-grey lg:bg-gradient-to-r">
        <div className="contiainer mx-auto">
          <div className="flex flex-wrap">
            <div className="w-1/2">
              <Accordion collapseAll>
                <AccordionPanel>
                  <AccordionTitle >What is Flowbite?</AccordionTitle>
                  <AccordionContent>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check out this guide to learn how to&nbsp;
                      <a
                        href="https://flowbite.com/docs/getting-started/introduction/"
                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        get started&nbsp;
                      </a>
                      and start developing websites even faster with components
                      on top of Tailwind CSS.
                    </p>
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqFeedBackSection;
