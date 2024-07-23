import React from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import useGetById from "../../Global/Apis/useGetById";
import MetaHelmet from "../../Component/Global/MetaHelmet";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import VehicleGallery from "../../Component/Vehicles/Details/VehicleGallery";
import FormSection from "../../Component/Global/Forms/FormSection";
import { useState } from "react";
import usePost from "../../Global/Apis/UsePost";
import Loading from "../../Component/Global/Loading";

const VehicleInquiry = () => {
  const [loader, setLoader] = useState(false);
  const { slug } = useParams();
  const { data: details, isLoading } = useGetById("products-single", slug);
  const { post } = usePost("product-inquiry-store");
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    location: "",
    sub_location: "",
    occupation: "",
    age: "",
    remarks: "",
    product_id: "",
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
      name: "location",
      required: true,

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
      required: true,

      name: "age",
      type: "number",
      cols: "1",
      as: "input",
      placeholder: "Age",
    },
    {
      label: true,
      labelName: "remarks",
      name: "remarks",
      cols: "2",
      as: "textarea",
      placeholder: "Remarks",
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
      .min(18, "Age must be a positive number")
      .max(105,"Your are too old")
      .integer("Age must be an integer"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setLoader(true);
    await post({ ...values, product_id: details?.id }, "Inquiry Form");
    resetForm();
    setLoader(false);
  };

  if (isLoading || !details) {
    return <Loading />;
  }
  return (
    <>
      <MetaHelmet
        title={
          details?.meta_title !== undefined
            ? `${details.meta_title} | BatasMaw`
            : "BatasMaw"
        }
        description={details?.meta_description}
        keyword={details?.meta_keywords}
      />
      <Breadcrumbs data={details?.name} />
      <section className="vehicle-inquiry py-16">
        <div className="side-padding">
          <div className="container mx-auto">
            <div className="heading-wrapper">
              <h1 className="heading mb-4 !text-primary">
                {details?.name} <span className="text-black">(Inquiry Form)</span>
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="col-span-1">
                <div className="form-wrapper rounded-lg border bg-grey bg-opacity-10 px-6 py-6">
                  <FormSection
                    initial={initialValues}
                    schema={validationSchema}
                    submit={handleSubmit}
                    settings={customControl}
                    loader={loader}
                  />
                </div>
              </div>
              <div className="col-span-1">
                <VehicleGallery data={details} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VehicleInquiry;
