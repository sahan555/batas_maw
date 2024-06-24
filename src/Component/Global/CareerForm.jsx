import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import usePost from "../../Global/Apis/UsePost";
const CareerForm = ({ jobid }) => {
  const [imageName, setImageName] = useState("No Files Selected");
  const [loader, setLoader] = useState(false);

  const { post } = usePost("career-applications");
  // const validFileExtensions = {
  //   image: ["jpg", "gif", "png", "jpeg", "svg", "webp"],
  // };

  // function isValidFileType(fileName, fileType) {
  //   return (
  //     fileName &&
  //     validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
  //   );
  // }
  const MAX_FILE_SIZE = 1024000;

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    cover_letter: "",
    file: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required(),
    cover_letter: Yup.string().required("Cover Letter is required"),
    file: Yup.mixed()
      // .test("is-valid-type", "Not a valid image type", (value) =>
      //   isValidFileType(value && value.name.toLowerCase(), "image"),
      // )
      .test(
        "is-valid-size",
        "Max allowed size is 100KB",
        (value) => value && value.size <= MAX_FILE_SIZE,
      ),
  });

  // const handleFileChange = (event, setFieldValue) => {
  //   const file = event.target.files[0];
  //   setFieldValue("file", file);
  //   setImageName(file ? file.name : "No Files Selected");
  // };
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
    formData.append("career_id", jobid);

    setLoader(true);
    await post(formData, "Application");
    setLoader(false);
    resetForm();
    setImageName("No Files Selected");
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
          onSubmit={(values, { resetForm }) =>
            handleSubmit(values, { resetForm })
          }
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
                        formik.errors.cover_letter &&
                        formik.touched.cover_letter
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      cover letter <span className="text-primary">*</span>
                    </label>
                    <Field
                      as="textarea"
                      name="cover_letter"
                      rows="4"
                      placeholder="Type Here"
                      className={`w-full border border-white px-5 py-2.5 outline-0 transition-[border] duration-300 visited:bg-white focus:border-grey ${
                        formik.errors.cover_letter &&
                        formik.touched.cover_letter
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
                      name="file"
                      className={`form-control `}
                      onChange={(event) => {
                        formik.setFieldValue(
                          "file",
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
                        Upload Resume
                        <img
                          src="/assets/images/icons/upload.svg"
                          alt="upload"
                        />
                      </span>
                      <p
                        id="imageName"
                        className={`${
                          formik.errors.file && formik.touched.file
                            ? "text-primary"
                            : ""
                        }`}
                      >
                        {imageName}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <div className="btn-wrapper">
                    <button
                      type="submit"
                      className={` ${loader && "pointer-events-none"} btn-full skew-btn inline-block px-8 py-2 uppercase text-white before:bg-primary hover:opacity-90`}
                    >
                      {loader ? "Submitting..." : "Submit"}
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
