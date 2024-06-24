import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import usePost from "../../Global/Apis/UsePost";
const ContactForm = () => {
  const [loader, setLoader] = useState(false);
  const { post } = usePost("contact-store");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    contact_message: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    email: Yup.string().email("Invalid email address").required("required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
    contact_message: Yup.string().required("required"),
  });
  const handleSubmit = async (values, { resetForm }) => {
    setLoader(true);
    await post(values, "Contact");
    setLoader(false);
    resetForm();
  };
  return (
    <div className="contact-form rounded-lg border bg-grey bg-opacity-10 px-6 py-6">
      <div className="heading-wrapper pb-6">
        <h1>Contact Us</h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => handleSubmit(values, { resetForm })}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                    className={`w-full border  border-white px-5 py-2.5 outline-0 transition-[border] duration-300 autofill:bg-none focus:border-grey ${
                      formik.errors.name && formik.touched.name ? "error" : ""
                    }`}
                  />
                </div>
              </div>
              <div className="col-span-1">
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
                    className={`w-full border  border-white px-5 py-2.5 outline-0 transition-[border] duration-300 autofill:bg-none focus:border-grey ${
                      formik.errors.email && formik.touched.email ? "error" : ""
                    }`}
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="form-group">
                  <label
                    className={`form-label mb-1 block text-sm uppercase ${
                      formik.errors.phone && formik.touched.phone
                        ? "text-primary"
                        : ""
                    }`}
                  >
                    Phone no. <span className="text-primary">*</span>
                  </label>
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Phone no"
                    className={`w-full border  border-white px-5 py-2.5 outline-0 transition-[border] duration-300 autofill:bg-none focus:border-grey ${
                      formik.errors.phone && formik.touched.phone ? "error" : ""
                    }`}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="form-group">
                  <label
                    className={`form-label mb-1 block text-sm uppercase ${
                      formik.errors.contact_message && formik.touched.contact_message
                        ? "text-primary"
                        : ""
                    }`}
                  >
                    Message <span className="text-primary">*</span>
                  </label>
                  <Field
                    as="textarea"
                    type="text"
                    name="contact_message"
                    row="5"
                    placeholder="Message"
                    className={`w-full border  border-white px-5 py-2.5 outline-0 transition-[border] duration-300 autofill:bg-none focus:border-grey ${
                      formik.errors.contact_message && formik.touched.contact_message
                        ? "error"
                        : ""
                    }`}
                  />
                </div>
              </div>
              <div className="col-span-full">
                <div className="btn-wrapper">
                  <button
                    type="submit"
                    className={`${loader && 'pointer-events-none'} btn-full skew-btn inline-block px-8 py-2 uppercase text-white before:bg-primary hover:opacity-90`}
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
  );
};

export default ContactForm;
