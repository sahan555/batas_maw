import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
const CareerForm = ({ jobname }) => {
  const [imageName, setImageName] = useState("No Files Selected");
  const validFileExtensions = {
    image: ["jpg", "gif", "png", "jpeg", "svg", "webp"],
  };

  function isValidFileType(fileName, fileType) {
    return (
      fileName &&
      validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
    );
  }
  const MAX_FILE_SIZE = 102400;

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    coverletter: "",
    resume: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    coverletter: Yup.string().required("Cover letter is required"),
    resume: Yup.mixed()
      .required("required")
      .test("is-valid-type", "Not a valid image type", (value) =>
        isValidFileType(value && value.name.toLowerCase(), "image"),
      )
      .test(
        "is-valid-size",
        "Max allowed size is 100KB",
        (value) => value && value.size <= MAX_FILE_SIZE,
      ),
  });

  // const handleFileChange = (event, setFieldValue) => {
  //   const file = event.target.files[0];
  //   setFieldValue("resume", file);
  //   setImageName(file ? file.name : "No Files Selected");
  // };

  const handleSubmit = (values) => {
    console.log({ ...values, jobname });
    // Here you can handle form submission, e.g., make an API call
  };
  return (
    <>
      <div className="career-form bg-grey bg-opacity-10 p-7">
        <div className="heading-wrapper mb-5 flex justify-between">
          <h3 className="heading">Application Form</h3>
          <figure className="h-[26px] w-[26px]">
            <img
              src="/assets/images/form.svg"
              alt="Application Form"
              className="object-contain object-right"
            />
          </figure>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-full">
                  <div className="form-group">
                    <label
                      className={`form-label mb-1 block text-sm uppercase ${
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
                      className={`w-full border border-white px-5 py-2.5 outline-0 transition-[border] duration-300 autofill:bg-none focus:border-grey ${
                        formik.errors.name && formik.touched.name ? "error" : ""
                      }`}
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <div className="form-group">
                    <label
                      className={`form-label mb-1 block text-sm uppercase ${
                        formik.errors.email && formik.touched.email
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <Field
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      className={`w-full border border-white px-5 py-2.5 outline-0 transition-[border] duration-300 autofill:bg-none focus:border-grey ${
                        formik.errors.email && formik.touched.email
                          ? "error"
                          : ""
                      }`}
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <div className="form-group">
                    <label
                      className={`form-label mb-1 block text-sm uppercase ${
                        formik.errors.phone && formik.touched.phone
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      phone no. <span className="text-primary">*</span>
                    </label>
                    <Field
                      type="number"
                      name="phone"
                      placeholder="Phone No."
                      className={`w-full border border-white px-5 py-2.5 outline-0 transition-[border] duration-300 autofill:bg-none focus:border-grey ${
                        formik.errors.phone && formik.touched.phone
                          ? "error"
                          : ""
                      }`}
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <div className="form-group">
                    <label
                      className={`form-label mb-1 block text-sm uppercase ${
                        formik.errors.coverletter && formik.touched.coverletter
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      cover letter <span className="text-primary">*</span>
                    </label>
                    <Field
                      as="textarea"
                      name="coverletter"
                      rows="4"
                      placeholder="Type Here"
                      className={`w-full border border-white px-5 py-2.5 outline-0 transition-[border] duration-300 visited:bg-white focus:border-grey ${
                        formik.errors.coverletter && formik.touched.coverletter
                          ? "error"
                          : ""
                      }`}
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <div className="form-group photo-group">
                    <input
                      type="file"
                      name="resume"
                      accept=".svg"
                      className={`form-control `}
                      onChange={(event) => {
                        formik.setFieldValue(
                          "resume",
                          event.currentTarget.files[0],
                        );
                      }}
                    />

                    <div className="btn-group flex flex-wrap gap-y-2 items-center">
                      <span
                        className={`photo-btn rounded-lg uppercase text-white `}
                      >
                        Upload Resume
                        <img
                          src="/assets/images/icons/upload.svg"
                          alt="upload"
                        />
                      </span>
                      <p id="imageName">{imageName}</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <div className="btn-wrapper">
                    <button
                      type="submit"
                      className="btn-full skew-btn inline-block px-8 py-2 uppercase text-white before:bg-primary hover:opacity-90"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default CareerForm;
