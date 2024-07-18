import React, { useState } from "react";
import * as Yup from "yup";
import FormSection from "./Forms/FormSection";
import usePost from "../../Global/Apis/UsePost";

const EventForm = ({id}) => {
  const [loader, setLoader] = useState(false);
  const { post } = usePost("event-registration-store");

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    location: "",
    event_id: "",
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
      cols: "2",
      as: "input",
      placeholder: "Location",
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
  });

  const handleSubmit = async (values, { resetForm }) => {
    setLoader(true);
    await post({...values,event_id:id}, "Event Form");
    resetForm();
    setLoader(false);
  };

  return (
    <div className="form-wrapper rounded-lg border bg-white  px-6 py-6">
      <div className="heading-wrapper">
        <h3 className="heading mb-3">Event Registration Form</h3>
      </div>
      <FormSection
        initial={initialValues}
        schema={validationSchema}
        submit={handleSubmit}
        settings={customControl}
        loader={loader}
        formControlClass={'border-solid !border-[#dddddd]'}
      />
    </div>
  );
};

export default EventForm;
