import React from "react";
import Breadcrumbs from "../Component/Global/BreadCrumbs";
import Accordion from "../Component/Global/Accordion";
import { FaMinus, FaPlus } from "react-icons/fa6";
import MetaHelmet from "../Component/Global/MetaHelmet";
import { useLayoutData } from "../Global/Context/Layout";

const Faq = () => {
  const { settings } = useLayoutData();
  const products = [
    {
      name: "Product 1",
      reviews: [
        { user: "Alice", rating: 4 },
        { user: "Bob", rating: 5 },
      ],
    },
    {
      name: "Product 2",
      reviews: [
        { user: "Charlie", rating: 3 },
        { user: "Dave", rating: 4 },
        { user: "Eve", rating: 5 },
      ],
    },
    {
      name: "Product 3",
      reviews: [
        { user: "Frank", rating: 2 },
        { user: "Grace", rating: 3 },
      ],
    },
  ];

  const totalReview = products.reduce(
    (acc, product) => {
      const review = product.reviews.reduce((a, item) => a + item.rating, 0);
      const numOfReviewer = product.reviews.length;
      return {
        rating: acc.rating + review,
        count: acc.count + numOfReviewer,
      };
    },
    { rating: 0, count: 0 },
  );
  const avgRating = totalReview.rating / totalReview.count;
  console.log(avgRating.toFixed(2));
  const productwithRating = products.map((item) => {
    const totalRating = item.reviews.reduce(
      (acc, product) => acc + product.rating,
      0,
    );
    const avgRating = totalRating / item.reviews.length;
    return { ...item, totalRating: avgRating };
  });
  console.log(productwithRating);
  return (
    <>
      <MetaHelmet
        title={`Frequently Asked Questions | ${settings?.meta_title !== undefined ? settings?.meta_title : "Batas Maw"}`}
      />

      <Breadcrumbs />
      <section className="faq-page section-break  bg-light-grey bg-opacity-40">
        <div className="side-padding">
          <div className="mx-auto max-w-[1000px] rounded-lg border bg-white p-4 sm:p-8">
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
