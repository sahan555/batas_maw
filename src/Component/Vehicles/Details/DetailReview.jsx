import React, { forwardRef, useState } from "react";
import { IoStar } from "react-icons/io5";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import useGetById from "../../../Global/Apis/useGetById";
import usePost from "../../../Global/Apis/UsePost";

const DetailReview = forwardRef((id, ref) => {
  const [imageName, setImageName] = useState("No Files Selected");
  const [loader, setLoader] = useState(false);

  const { data: review } = useGetById("review", id?.id);
  const { post } = usePost("review-store");
  console.log(review);
  const totalReview = review?.reduce(
    (accumulator, currentValue) =>
      accumulator + parseFloat(currentValue.rating),
    0,
  );
  console.log(totalReview);
  const [rating, setRating] = useState(4);
  const [hover, setHover] = useState(4);

  const initialValues = {
    rating: 4,
    review_message: "",
    name: "",
    email: "",
    image: "",
  };
  const validationSchema = Yup.object().shape({
    rating: Yup.number().required("required"),
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    review_message: Yup.string().required("required"),
    // image: Yup.mixed(),
    // .test("is-valid-type", "Not a valid image type", (value) =>
    //   isValidFileType(value && value.name.toLowerCase(), "image"),
    // )
  });

  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, entry]) => {
      if (key === "file" && entry) {
        formData.set("file", entry);
      } else {
        formData.append(
          key,
          Array.isArray(entry) ? JSON.stringify(entry) : entry || "",
        );
      }
    });
    formData.append("product_id", id?.id);

    setLoader(true);
    await post(formData, "Review");
    setLoader(false);
    resetForm();
    setImageName("No Files Selected");
  };
  return (
    <div className="detail-review py-14" ref={ref}>
      <div className="heading-wrapper mb-3">
        <h2 className="heading">Reviews</h2>
      </div>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-full lg:col-span-3">
          <div className="total-reviews mb-2">
            <h3 className="flex items-baseline text-4xl">
              <span className="mr-4 text-[#FFB157]">
                <IoStar />
              </span>
              4.6 <small className="ml-1 text-xl">Overall</small>
            </h3>
          </div>
          <div className="review-group h-[628px] overflow-y-auto pr-2">
            {review?.length > 0 ? (
              review?.map((item) => (
                <div
                  className="review-box flex gap-6 bg-[#EEEEEE] px-8 py-6 [&:not(:last-child)]:mb-2"
                  key={item?.id}
                >
                  {item?.image ? (
                    <figure className="h-[80px] w-[80px] flex-none">
                      <img src={item?.image} alt={item?.title} />
                    </figure>
                  ) : (
                    <div className="h-[80px] w-[80px] flex-none flex  justify-center items-center bg-[#fafafa] text-7xl">
                      {item?.name.charAt(0)}
                    </div>
                  )}

                  <article>
                    <div className="rating mb-3">
                      <ul className="flex gap-2">
                        {Array.from({ length: 5 }, (_, index) => (
                          <li
                            key={index}
                            className={
                              index < item.rating
                                ? "text-[#FFB157]"
                                : "text-grey"
                            }
                          >
                            <IoStar />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <h2 className="mb-2 text-base">{item?.name}</h2>
                    <p className=" leading-7 text-grey">
                      {item?.review_message}
                    </p>
                  </article>
                </div>
              ))
            ) : (
              <>
                <div className="flex h-full items-center justify-center bg-[#EEEEEE]">
                  <p>No reviews Found</p>
                </div>
              </>
            )}
            {}
          </div>
        </div>
        <div className="col-span-full lg:col-span-2">
          <div className="review-form mt-[53px] border p-6">
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
                            className={`star cursor-pointer text-[#dddddd] ${starValue <= (hover || rating) ? "!text-[#FFB157]" : ""}`}
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
                  <div className="form-group photo-group mb-4">
                    <label className={`form-label mb-1 block capitalize `}>
                      Your Photo
                    </label>
                    <input
                      type="file"
                      name="image"
                      className={`form-control `}
                      onChange={(event) => {
                        formik.setFieldValue(
                          "image",
                          event.currentTarget.files[0],
                        );
                        setImageName(
                          event.currentTarget.files[0]
                            ? event.currentTarget.files[0].name
                            : "No Files Selected",
                        );
                      }}
                    />

                    <div className="btn-group flex flex-wrap items-center gap-y-2">
                      <span
                        className={`photo-btn rounded-lg uppercase text-white `}
                      >
                        Upload Photo
                        <img
                          src="/assets/images/icons/upload.svg"
                          alt="upload"
                        />
                      </span>
                      <p id="imageName">{imageName}</p>
                    </div>
                  </div>
                  <div className="form-group mb-2">
                    <label
                      className={`form-label mb-4 block capitalize ${
                        formik.errors.review_message &&
                        formik.touched.review_message
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      Your Review <span className="text-primary">*</span>
                    </label>
                    <Field
                      as="textarea"
                      name="review_message"
                      rows="4"
                      placeholder="Write Something"
                      className={`w-full border border-white bg-[#EEEEEE] px-5 py-2.5 outline-0 transition-[border] duration-300 autofill:bg-none focus:border-grey ${
                        formik.errors.review_message &&
                        formik.touched.review_message
                          ? "error"
                          : ""
                      }`}
                    />
                  </div>

                  <div className="btn-wrapper">
                    <button
                      type="submit"
                      className={`${loader && 'pointer-events-none'} btn-full skew-btn inline-block px-8 py-2 uppercase text-white before:bg-primary hover:opacity-90`}
                      >
                  {loader ? "Submitting..." : "Submit"}
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
});

export default DetailReview;
