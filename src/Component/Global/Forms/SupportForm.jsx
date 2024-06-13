import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import Breadcrumbs from "../BreadCrumbs";
const SupportForm = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    email: Yup.string().email("Invalid email address").required("required"),
    phone: Yup.number().positive().required("required"),
    subject: Yup.string().required("required"),
    message: Yup.string().required("required"),
  });

  return (
    <>
      <Breadcrumbs />
      <section className="support-form section-break">
        <div className="side-padding">
          <div className="mx-auto w-full max-w-[700px]">
            <div className="form-wrapper bg-grey bg-opacity-10 px-7 py-10">
              <div className="heading-wrapper">
                <h1 className="heading mb-3">Customer Support Form</h1>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => console.log(values)}
              >
                {(formik) => (
                  <Form onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                              formik.errors.name && formik.touched.name
                                ? "error"
                                : ""
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
                            Email Address{" "}
                            <span className="text-primary">*</span>
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
                              formik.errors.subject && formik.touched.subject
                                ? "text-primary"
                                : ""
                            }`}
                          >
                            SUBJECT <span className="text-primary">*</span>
                          </label>
                          <Field
                            type="text"
                            name="subject"
                            placeholder="SUBJECT"
                            className={`w-full border border-white px-5 py-2.5 outline-0 transition-[border] duration-300 autofill:bg-none focus:border-grey ${
                              formik.errors.subject && formik.touched.subject
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
                              formik.errors.message && formik.touched.message
                                ? "text-primary"
                                : ""
                            }`}
                          >
                            Message <span className="text-primary">*</span>
                          </label>
                          <Field
                            as="textarea"
                            type="text"
                            name="message"
                            row="5"
                            placeholder="Message"
                            className={`w-full border border-white px-5 py-2.5 outline-0 transition-[border] duration-300 autofill:bg-none focus:border-grey ${
                              formik.errors.message && formik.touched.message
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
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportForm;
