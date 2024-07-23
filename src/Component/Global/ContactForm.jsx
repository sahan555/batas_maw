import React, { useState } from "react";
import * as Yup from "yup";
import usePost from "../../Global/Apis/UsePost";
import FormSection from "./Forms/FormSection";
const ContactForm = () => {
  const [loader, setLoader] = useState(false);
  const { post } = usePost("feedback-store");
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    feedback_message: "",
    // recive_mail: false,
  };
  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    feedback_message: Yup.string().required("Feedback message is required"),
    // recive_mail: Yup.boolean(),
  });
  const customControl = [
    {
      label: true,
      required: true,
      name: "name",
      type: "text",
      cols: "2",
      as: "input",
      placeholder: "Name",
    },

    {
      label: true,
      name: "phone",
      required: true,
      type: "number",
      cols: "1",
      as: "input",
      placeholder: "Phone No.",
    },
    {
      label: true,
      required: true,
      name: "email",
      type: "email",
      cols: "1",
      as: "input",
      placeholder: "Email Address",
    },
    {
      label: true,
      labelName: "Messages",
      name: "feedback_message",
      cols: "2",
      as: "textarea",
      placeholder: "Messages",
    },
  ];
  const handleSubmit = async (values, { resetForm }) => {
    setLoader(true);
    await post(values, "Feedback");
    setLoader(false);
    resetForm();
  };

  return (
    <div className="contact-form">
      <FormSection
        initial={initialValues}
        schema={schema}
        submit={handleSubmit}
        settings={customControl}
        loader={loader}
      />
    </div>
  );
};

export default ContactForm;
