import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
    recive_mail: false,
  };
  const schema = Yup.object().shape({
    name: Yup.string().required("required"),
    email: Yup.string().required("required"),
    phone: Yup.number().positive().required("required"),
    message: Yup.string().required("required"),
    recive_mail: Yup.boolean(),
  });
  return (
    <div className="contact-form">
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => console.log(values)}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-full">
                <div className="form-group">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Full name"
                    className={`w-full border border-white px-5 transition-[border] duration-300 py-2.5 outline-0 autofill:bg-none focus:border-grey ${
                      formik.errors.name &&
                      formik.touched.name
                        ? "border-red-500"
                        : ""}`}
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="form-group">
                  <Field
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    className={`w-full border border-white px-5 transition-[border] duration-300 py-2.5 outline-0 autofill:bg-none focus:border-grey ${
                      formik.errors.email &&
                      formik.touched.email
                        ? "border-red-500"
                        : ""}`}
                    
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="form-group">
                  <Field
                    type="number"
                    name="phone"
                    placeholder="Phone No."
                    className={`w-full border border-white px-5 transition-[border] duration-300 py-2.5 outline-0 autofill:bg-none focus:border-grey ${
                      formik.errors.phone &&
                      formik.touched.phone
                        ? "border-red-500"
                        : ""}`}
                    
                  />
                </div>
              </div>
              <div className="col-span-full">
                <div className="form-group">
                  <Field
                    as="textarea"
                    name="message"
                    rows="4"
                    placeholder="Message"
                    className={`w-full border border-white px-5 transition-[border] duration-300 py-2.5 outline-0 focus:border-grey visited:bg-white ${
                      formik.errors.message &&
                      formik.touched.message
                        ? "border-red-500"
                        : ""}`}
                    
                  />
                </div>
              </div>
              <div className="col-span-full">
                <div className="form-group">
                  <label className="text-sm">
                    <Field type="checkbox" name="recive_mail" />
                    <span className="align-text-bottom ml-2">
                      I agree to receive Mail on my email address from batas Maw
                      or its authorized associates to assist me further.
                    </span>
                  </label>
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
  );
};

export default ContactForm;
