import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { vehicleReviews } from "../../../Global/Datas/VehicleData";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const DetailReview = () => {
  const [rating, setRating] = useState(1);
  const [hover, setHover] = useState(1);

  const initialValues = {
    rating: 1,
    review: "",
    name: "",
    email: "",
  };
  const validationSchema = Yup.object().shape({
    rating: Yup.number().required("required"),
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    review: Yup.string().required("required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="detail-review py-14">
      <div className="heading-wrapper mb-3">
        <h2 className="heading">Reviews</h2>
      </div>
      <div className="grid grid-cols-5 gap-8">
        <div className="lg:col-span-3 col-span-full">
          <div className="total-reviews mb-2">
            <h3 className="flex items-baseline text-4xl">
              <span className="mr-4 text-[#FFB157]">
                <IoStar />
              </span>
              4.6 <small className="ml-1 text-xl">Overall</small>
            </h3>
          </div>
          <div className="review-group h-[600px] overflow-y-auto pr-2">
            {vehicleReviews?.map((item, index) => (
              <div
                className="review-box flex gap-6 bg-[#EEEEEE] px-8 py-6 [&:not(:last-child)]:mb-2"
                key={index}
              >
                <figure className="h-[80px] w-[80px] flex-none">
                  <img src={item?.image} alt={item?.title} />
                </figure>
                <article>
                  <div className="rating mb-3">
                    <ul className="flex gap-2">
                      {Array.from({ length: 5 }, (_, index) => (
                        <li
                          key={index}
                          className={
                            index < item.rating ? "text-[#FFB157]" : "text-grey"
                          }
                        >
                          <IoStar />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h2 className="mb-2 text-base">{item?.title}</h2>
                  <p className=" leading-7 text-grey">{item?.desc}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 col-span-full">
          <div className="review-form border p-6 mt-[53px]">
            <div className="heading-wrapper relative mb-6">
              <h3 className="heading">Write Review</h3>
              <figure className="absolute right-0 top-0 h-[66px] w-[66px]">
                <img src="/assets/images/icons/ambu.svg" alt="" />
              </figure>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  <div className="form-group star-rating mb-4 flex gap-3">
                    <label
                      className={`form-label mb-1 block capitalize ${
                        formik.errors.rating && formik.touched.rating
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      Your Rating
                    </label>
                    <div className="star-group flex gap-2 text-xl">
                      <Field
                        className="rating-value"
                        type="hidden"
                        name="rating"
                        values={rating}
                      />
                      {Array.from({ length: 5 }, (_, index) => {
                        const starValue = index + 1;
                        return (
                          <span
                            key={index}
                            className={`star text-[#dddddd] cursor-pointer ${starValue <= (hover || rating) ? "!text-[#FFB157]" : ""}`}
                            onClick={() => {
                              setRating(starValue);
                              formik.setFieldValue("rating", starValue);
                            }}
                            onMouseEnter={() => setHover(starValue)}
                            onMouseLeave={() => setHover(0)}
                            data-rating={starValue}
                          >
                            <IoStar />
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="form-group mb-2">
                    <label
                      className={`form-label mb-1 block capitalize ${
                        formik.errors.review && formik.touched.review
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      Your Review <span className="text-primary">*</span>
                    </label>
                    <Field
                      as="textarea"
                      name="review"
                      rows="4"
                      placeholder="Write Something"
                      className={`w-full border border-white bg-[#EEEEEE] px-5 py-2.5 outline-0 transition-[border] duration-300 autofill:bg-none focus:border-grey ${
                        formik.errors.review && formik.touched.review
                          ? "error"
                          : ""
                      }`}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label
                      className={`form-label mb-1 block capitalize ${
                        formik.errors.name && formik.touched.name
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      name <span className="text-primary">*</span>
                    </label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Full name"
                      className={`w-full border border-white bg-[#EEEEEE] px-5 py-2.5 outline-0 transition-[border] duration-300 autofill:bg-none focus:border-grey ${
                        formik.errors.name && formik.touched.name ? "error" : ""
                      }`}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label
                      className={`form-label mb-1 block capitalize ${
                        formik.errors.email && formik.touched.email
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      Email <span className="text-primary">*</span>
                    </label>
                    <Field
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      className={`w-full border border-white bg-[#EEEEEE] px-5 py-2.5 outline-0 transition-[border] duration-300 autofill:bg-none focus:border-grey ${
                        formik.errors.email && formik.touched.email
                          ? "error"
                          : ""
                      }`}
                    />
                  </div>
                  <div className="btn-wrapper">
                    <button
                      type="submit"
                      className="btn-full skew-btn inline-block px-8 py-2 uppercase text-white before:bg-primary hover:opacity-90"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailReview;
