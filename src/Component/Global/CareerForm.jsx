import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import usePost from "../../Global/Apis/UsePost";
import FormSection from "./Forms/FormSection";
const CareerForm = ({ jobid }) => {
  const [imageName, setImageName] = useState("No Files Selected");
  const [loader, setLoader] = useState(false);

  const { post } = usePost("career-applications");
  // const validFileExtensions = {
  //   image: ["jpg", "gif", "png", "jpeg", "svg", "webp"],
  // };

  // function isValidFileType(fileName, fileType) {
  //   return (
  //     fileName &&
  //     validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
  //   );
  // }
  const MAX_FILE_SIZE = 1024000;

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    cover_letter: "",
    file: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot be longer than 50 characters")
    .matches(/^[a-zA-Z\s]+$/, "Name must contain only letters and spaces"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required(),
    cover_letter: Yup.string().required("Cover Letter is required"),
    file: Yup.mixed()
      // .test("is-valid-type", "Not a valid image type", (value) =>
      //   isValidFileType(value && value.name.toLowerCase(), "image"),
      // )
      .test(
        "is-valid-size",
        "Max allowed size is 1MB",
        (value) => value && value.size <= MAX_FILE_SIZE,
      ),
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
      cols: "2",
      as: "input",
      placeholder: "Phone No.",
    },
    {
      label: true,
      required: true,
      name: "email",
      type: "email",
      cols: "2",
      as: "input",
      placeholder: "Email Address",
    },
    {
      label: true,
      required: true,
      labelName: "Cover Letter",
      name: "cover_letter",
      cols: "2",
      as: "textarea",
      placeholder: "Type Here",
    },
    {
      label: false,
      as: "file",
      name: "file",
      cols: "2",
      onChange: (formik) => (event) => {
        formik.setFieldValue("file", event.currentTarget.files[0]);
      },
    },
  ];

  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, entry]) => {
      if (key === "file" && entry) {
        formData.set("file", entry);
      } else {
        formData.append(
          key,
          Array.isArray(entry) ? JSON.stringify(entry) : entry || "",
        );
      }
    });
    formData.append("career_id", jobid);

    console.log(values);
    setLoader(true);
    await post(formData, "Application");
    setLoader(false);
    resetForm();
    setImageName("No Files Selected");
  };
  return (
    <>
      <div className="career-form bg-grey bg-opacity-10 p-7">
        <div className="heading-wrapper mb-5 flex justify-between">
          <h3 className="heading">Application Form</h3>
          <figure className="h-[26px] w-[26px]">
            <img
              src="/assets/images/form.svg"
              alt="Application Form"
              className="object-contain object-right"
            />
          </figure>
        </div>
        <FormSection
          initial={initialValues}
          schema={validationSchema}
          submit={handleSubmit}
          settings={customControl}
          loader={loader}
        />
      </div>
    </>
  );
};

export default CareerForm;
