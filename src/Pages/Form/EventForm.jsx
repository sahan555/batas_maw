import React from "react";
import * as Yup from "yup";
import MetaHelmet from "../../Component/Global/MetaHelmet";
import Breadcrumbs from "../../Component/Global/BreadCrumbs";
import { useLayoutData } from "../../Global/Context/Layout";
import FormSection from "../../Component/Global/Forms/FormSection";

const EventForm = () => {
  const { settings } = useLayoutData();

  const initialValues = {
    name: "",
    phone: "",
    location: "",
    eventtype: "",
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
      name: "location",
      required: true,
      type: "text",
      cols: "1",
      as: "input",
    },
    {
      label: true,
      name: "eventtype",
      required: true,
      type: "text",
      cols: "2",
      as: "input",
    },

    // {
    //   label: true,
    //   required: true,
    //   name: "country",
    //   cols: "1",
    //   as: "select",
    //   option: formObj.map((item) => ({
    //     name: item?.name,
    //     value: item?.name,
    //   })),
    // },
  ];
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name can't be longer than 50 characters"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
    location: Yup.string()
      .required("location is required")
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name can't be longer than 50 characters"),
    eventtype: Yup.string().required("Event Type is required"),
  });

  const handleSumbit = async (values) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, entry]) => {
      if (key === "img" && entry) {
        formData.set("img", entry);
      } else if (key === "isActive") {
        formData.set("isActive", JSON.parse(entry));
      } else {
        formData.append(
          key,
          Array.isArray(entry) ? JSON.stringify(entry) : entry || "",
        );
      }
    });
    console.log(formData)
  };

  return (
    <>
      <MetaHelmet title={`Event Form | ${settings?.meta_title  ?? 'Batas Maw'}`} />
      <Breadcrumbs />
      <section className="support-form section-break">
        <div className="side-padding">
          <div className="mx-auto w-full max-w-[700px]">
            <div className="form-wrapper bg-grey bg-opacity-10 px-7 py-10">
              <div className="heading-wrapper">
                <h1 className="heading mb-3">Event Form</h1>
              </div>
              <FormSection
                initial={initialValues}
                schema={validationSchema}
                submit={handleSumbit}
                settings={customControl}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventForm;
