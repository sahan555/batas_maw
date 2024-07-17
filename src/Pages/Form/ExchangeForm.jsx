import React from "react";
import * as Yup from "yup";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import { useLayoutData } from "../../Global/Context/Layout";
import MetaHelmet from "../../Component/Global/MetaHelmet";
import FormSection from "../../Component/Global/Forms/FormSection";
import { useState } from "react";
import usePost from "../../Global/Apis/UsePost";
import useGet from "../../Global/Apis/useGet";
import { useRef } from "react";
const ExchangeForm = () => {
  const { settings } = useLayoutData();
  const [loader, setLoader] = useState(false);
  const { post } = usePost("vehicle-exchange-store");
  const { data: product } = useGet("select-products");
  const productRef = useRef(null);

  const initialValues = {
    name: "",
    phone: "",
    location: "",
    sub_location: "",
    email: "",
    occupation: "",
    age: "",
    product_id: "",
    existing_vehicle: "",
    ex_veh_model_year: "",
    ex_veh_reg_no: "",
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
      type: "email",
      cols: "1",
      as: "input",
      placeholder: "Email Address",
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
      name: "age",
      required: true,

      type: "number",
      cols: "1",
      as: "input",
      placeholder: "Age",
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
      labelName: "Product Model",
      required: true,
      name: "product_id",
      cols: "2",
      as: "select",
      ref: productRef,
      multiple: false,
      option: product?.map((item) => ({
        label: item?.name,
        value: item?.id,
      })),
    },
    {
      label: true,
      required: true,

      labelName: "Your Vehicle Model",
      name: "existing_vehicle",
      type: "text",
      cols: "1",
      as: "input",
      placeholder: "Your Vehicle Model",
    },
    {
      label: true,
      labelName: "Your Vehicle Model Year",
      name: "ex_veh_model_year",
      type: "text",
      cols: "1",
      as: "input",
      placeholder: "Vehicle Model Year",
    },
    {
      label: true,
      labelName: "Your Vehicle Registration No.",
      name: "ex_veh_reg_no",
      type: "text",
      cols: "2",
      as: "input",
      placeholder: "Your Vehicle Registration No.",
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

    email: Yup.string().email("Invalid email format"),

    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),

    location: Yup.string().required("Location is required"),

    age: Yup.number()
      .required("Age is required")
      .min(18, "Your age must be older than 18")
      .integer("Age must be an integer"),
    product_id: Yup.number().required("Product Model is required"),
    existing_vehicle: Yup.string().required("Your Vehicle Model is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setLoader(true);
    await post(values, "Exchange Form");
    resetForm();
    setLoader(false);
  };
  return (
    <>
      <MetaHelmet
        title={`Exchange Form | ${settings?.meta_title ?? "Batas Maw"}`}
      />
      <Breadcrumbs />
      <section className="support-form section-break">
        <div className="side-padding">
          <div className="mx-auto w-full max-w-[700px]">
            <div className="form-wrapper rounded-lg border bg-grey bg-opacity-10 px-6 py-6">
              <div className="heading-wrapper">
                <h1 className="heading mb-3">Vehicle Exchange Form</h1>
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

export default ExchangeForm;
