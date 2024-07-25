import React, { useState } from "react";
import * as Yup from "yup";
import usePost from "../../Global/Apis/UsePost";
import FormSection from "../Global/Forms/FormSection";
import useGet from "../../Global/Apis/useGet";
import { useRef } from "react";
const ContactForm = () => {
  const [loader, setLoader] = useState(false);
  const { data: product } = useGet("select-products");
  const { post } = usePost("contact-store");
  const productRef = useRef(null);

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    location: "",
    sub_location: "",
    occupation: "",
    age: "",
    inquiry: "",
    contact_message: "",
    product_id: [],
  };

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
      name: "email",
      required: true,

      type: "email",
      cols: "1",
      as: "input",
      placeholder: "Email",
    },
    {
      label: true,
      name: "location",
      type: "text",
      cols: "1",
      as: "input",
      placeholder: "Location",
    },
    {
      label: true,
      labelName: "Sub Location",
      name: "sub_location",
      type: "text",
      cols: "1",
      as: "input",
      placeholder: "Sub Location",
    },
    {
      label: true,
      name: "occupation",
      type: "text",
      cols: "1",
      as: "input",
      placeholder: "occupation",
    },
    {
      label: true,
      name: "age",
      type: "number",
      cols: "1",
      as: "input",
      placeholder: "Age",
    },
    {
      label: true,
      labelName: "Subject",
      name: "inquiry",
      type: "text",
      cols: "2",
      as: "input",
      placeholder: "Subject",
    },
    {
      label: true,
      labelName: "messages",
      name: "contact_message",
      cols: "2",
      as: "textarea",
      placeholder: "Messages",
    },
    {
      label: true,
      labelName: "Product Model",
      required: true,
      name: "product_id",
      cols: "2",
      as: "select",
      ref: productRef,
      multiple: true,
      option: product?.map((item) => ({
        label: item?.name,
        value: item?.id,
      })),
    },
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot be longer than 50 characters")
    .matches(/^[a-zA-Z\s]+$/, "Name must contain only letters and spaces"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    location: Yup.string(),
    sub_location: Yup.string(),
    occupation: Yup.string(),
    age: Yup.number()
      .min(18, "Age must be a positive number")
      .max(105, "Your are too old")
      .integer("Age must be an integer"),
    inquiry: Yup.string(),
    contact_message: Yup.string(),
    product_id: Yup.array()
      .of(Yup.number().required("Product is required"))
      .min(1, "At least one product must be selected"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setLoader(true);
    await post(values, "Contact");
    if (productRef.current) {
      productRef.current.clearValue();
    }
    resetForm();
    setLoader(false);
  };
  return (
    <div className="contact-form rounded-lg border bg-grey bg-opacity-10 px-6 py-6">
      <div className="heading-wrapper pb-6">
        <h1>Contact Us</h1>
      </div>
      <FormSection
        initial={initialValues}
        schema={validationSchema}
        submit={handleSubmit}
        settings={customControl}
        loader={loader}
      />
    </div>
  );
};

export default ContactForm;
