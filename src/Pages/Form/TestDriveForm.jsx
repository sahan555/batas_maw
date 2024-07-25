import React, { useRef, useState } from "react";
import * as Yup from "yup";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import { useLayoutData } from "../../Global/Context/Layout";
import FormSection from "../../Component/Global/Forms/FormSection";
import MetaHelmet from "../../Component/Global/MetaHelmet";
import usePost from "../../Global/Apis/UsePost";
import useGet from "../../Global/Apis/useGet";

const TestDriveForm = () => {
  const { settings } = useLayoutData();
  const [loader, setLoader] = useState(false);
  const { data: product } = useGet("select-products");
  const { post } = usePost("test-drive-store");
  const productRef = useRef(null);

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    location: "",
    sub_location: "",
    occupation: "",
    age: "",
    license_no: "",
    product_id: [],
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
    },
    {
      label: true,
      name: "phone",
      required: true,
      type: "number",
      cols: "1",
      as: "input",
    },
    {
      label: true,
      name: "email",
      required: true,
      type: "email",
      cols: "1",
      as: "input",
    },
    {
      label: true,
      name: "location",
      required: true,
      type: "text",
      cols: "1",
      as: "input",
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
    },
    {
      label: true,
      labelName: "license no.",
      name: "license_no",
      required: true,
      type: "text",
      cols: "2",
      as: "input",
      placeholder: "license no.",
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
    .max(50, "Name cannot be longer than 50 characters")
    .matches(/^[a-zA-Z\s]+$/, "Name must contain only letters and spaces"),

    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
    location: Yup.string()
      .required("location is required")
      .min(2, "Location must be at least 2 characters long")
      .max(50, "Location can't be longer than 50 characters"),
    email: Yup.string().email("Invalid email format"),
    age: Yup.number()
      .required("Age is required")
      .min(18, "Age must be a positive number")
      .max(105, "Your are too old")
      .integer("Age must be an integer"),
    license_no: Yup.string().required("License is required"),
    product_id: Yup.array()
      .of(Yup.number().required("Product is required"))
      .min(1, "At least one product must be selected"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setLoader(true);
    await post(values, "Test Drive Form");
    if (productRef.current) {
      productRef.current.clearValue();
    }
    resetForm();
    setLoader(false);
  };
  return (
    <>
      <MetaHelmet
        title={`Test Drive Form | ${settings?.meta_title ?? "Batas Maw"}`}
      />
      <Breadcrumbs />
      <section className="support-form section-break">
        <div className="side-padding">
          <div className="mx-auto w-full max-w-[700px]">
            <div className="form-wrapper bg-grey bg-opacity-10 px-7 py-10">
              <div className="heading-wrapper">
                <h1 className="heading mb-3">Test Drive Form</h1>
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

export default TestDriveForm;
