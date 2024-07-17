import React from "react";
import * as Yup from "yup";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import { useLayoutData } from "../../Global/Context/Layout";
import MetaHelmet from "../../Component/Global/MetaHelmet";
import FormSection from "../../Component/Global/Forms/FormSection";
import { useState } from "react";
import usePost from "../../Global/Apis/UsePost";
const SupportForm = () => {
  const { settings } = useLayoutData();
  const [loader, setLoader] = useState(false);
  const { post } = usePost("customer-support-form-store");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    location: "",
    sub_location: "",
    occupation: "",
    age: "",
    support_department: "",
    inquiry: "",
    remarks: "",
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
      required: true,

      name: "email",
      type: "email",
      cols: "1",
      as: "input",
      placeholder: "Email Address",
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
      required: true,

      type: "number",
      cols: "1",
      as: "input",
      placeholder: "Age",
    },
    {
      label: true,
      labelName: "Support required department",
      name: "support_department",
      type: "text",
      cols: "2",
      as: "input",
      placeholder: "department",
    },
    {
      label: true,
      labelName: "Specify the inquiry",
      name: "inquiry",
      type: "text",
      cols: "2",
      as: "input",
      placeholder: "Inquiry",
    },
    {
      label: true,
      labelName: "remarks",
      name: "remarks",
      cols: "2",
      as: "textarea",
      placeholder: "remarks",
    },
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name cannot be longer than 50 characters"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),

    location: Yup.string().required("Location is required"),

    age: Yup.number()
      .required("Age is required")
      .min(10, "Age must be a positive number")
      .integer("Age must be an integer"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setLoader(true);
    await post(values, "Support Form");
    resetForm();
    setLoader(false);
  };
  return (
    <>
      <MetaHelmet
        title={`Support Form | ${settings?.meta_title ?? "Batas Maw"}`}
      />
      <Breadcrumbs />
      <section className="support-form section-break">
        <div className="side-padding">
          <div className="mx-auto w-full max-w-[700px]">
            <div className="form-wrapper rounded-lg border bg-grey bg-opacity-10 px-6 py-6">
              <div className="heading-wrapper">
                <h1 className="heading mb-3">Customer Support Form</h1>
              </div>
              <FormSection
                initial={initialValues}
                schema={validationSchema}
                submit={handleSubmit}
                settings={customControl}
                loader={loader}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportForm;
