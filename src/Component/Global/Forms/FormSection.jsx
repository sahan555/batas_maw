import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Select from "react-select";

const FormSection = ({
  initial,
  schema,
  submit,
  settings,
  loader,
  formControlClass,
}) => {
  const [imageName, setImageName] = useState("No Files Selected");
  const handleFileChange = (event) => {
    const inputImage = event.target.files[0];
    if (inputImage) {
      setImageName(inputImage.name);
    } else {
      setImageName("No Files Selected");
    }
  };
  return (
    <section className="form-section">
      <div className="form-wrapper">
        <Formik
          initialValues={initial}
          validationSchema={schema}
          onSubmit={submit}
          enableReinitialize
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-2 gap-8">
                {settings?.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <div className={`col-span-${item?.cols}`}>
                        <div className="form-group" key={index}>
                          {item?.label && (
                            <label
                              htmlFor={item?.name}
                              className="form-label capitalize"
                            >
                              {item?.labelName ?? item?.name}
                              {item?.required && (
                                <span className="text-red-400">*</span>
                              )}
                            </label>
                          )}

                          {(item?.children && item?.children) ||
                            (item?.as === "select" &&
                              item?.option &&
                              (item?.multiple === true ? (
                                <>
                                  <Select
                                    isMulti
                                    ref={item?.ref}
                                    name={item?.name}
                                    // onChange={formik.handleChange}
                                    isClearable={true}
                                    options={item?.option}
                                    className={`basic-multi-select form-control border-green-400 border border-solid ${formControlClass ?? ""}`}
                                    classNamePrefix="select"
                                    onChange={(value) => {
                                      formik.setFieldValue(
                                        item.name,
                                        value.map((item) => item.value),
                                      );
                                    }}
                                  />
                                </>
                              ) : (
                                <Field
                                  as={item?.as || null}
                                  type={item?.type || null}
                                  className={`w-full border border-white px-5 py-2.5 outline-0 transition-[border] duration-300 autofill:bg-none focus:border-grey ${formControlClass ?? ""} ${
                                    formik.errors[item?.name] &&
                                    formik.touched[item?.name]
                                      ? "error"
                                      : ""
                                  }`}
                                  onChange={formik.handleChange}
                                  placeholder={item?.placeholder ?? item?.name}
                                  name={item?.name}
                                >
                                  <option value="" disabled>
                                    Selected
                                  </option>
                                  {item?.option?.map((item, index) => (
                                    <option value={item?.value} key={index}>
                                      {item?.label}
                                    </option>
                                  ))}
                                </Field>
                              ))) ||
                            ((item?.as === "input" ||
                              item?.as === "textarea") && (
                              <Field
                                as={item?.as || null}
                                type={item?.type || null}
                                className={`w-full border border-white px-5 py-2.5 outline-0 transition-[border] duration-300 autofill:bg-none focus:border-grey ${formControlClass ?? ""} ${
                                  formik.errors[item?.name] &&
                                  formik.touched[item?.name]
                                    ? "error"
                                    : ""
                                }`}
                                onChange={
                                  item.onChange
                                    ? item.onChange(formik)
                                    : formik.handleChange
                                }
                                placeholder={item?.placeholder ?? item?.name}
                                name={item?.name}
                                value={
                                  item.value
                                    ? item.value(formik)
                                    : formik.values[item.name] || ""
                                }
                                disabled={item?.disabled}
                              />
                            )) ||
                            (item?.as === "checkbox" && (
                              <>
                                {item.option.map((opt) => (
                                  <div className="form-check">
                                    <Field
                                      type={item?.type || null}
                                      className={`form-control border-green-400 border border-solid ${formControlClass ?? ""}`}
                                      onChange={formik.handleChange}
                                      placeholder={
                                        item?.placeholder ?? item?.name
                                      }
                                      name={item?.name}
                                      value={opt?.value}
                                    />
                                    <span>{opt?.optitem}</span>
                                  </div>
                                ))}
                              </>
                            )) ||
                            (item?.as === "radio" && (
                              <>
                                {item.option.map((opt) => (
                                  <div className="form-radio">
                                    <Field
                                      type={item?.type || null}
                                      className={`form-control border-green-400 border border-solid ${formControlClass ?? ""}`}
                                      onChange={() =>
                                        formik.setFieldValue(
                                          item.name,
                                          opt?.value,
                                        )
                                      }
                                      name={item?.name}
                                      value={String(opt?.value)}
                                      checked={
                                        formik.values[item?.name] === opt?.value
                                      }
                                    />
                                    <span>{opt?.optitem}</span>
                                  </div>
                                ))}
                              </>
                            )) ||
                            (item?.as === "date" && (
                              <DatePicker
                                showIcon
                                selected={formik?.values[item?.name]}
                                onChange={
                                  item.onChange
                                    ? item?.onChange(formik)
                                    : (date) =>
                                        formik.setFieldValue(item?.name, date)
                                }
                                dateFormat="dd/MM/yyyy"
                                maxDate={new Date()}
                                className={`w-full rounded-md border border-slate-300 px-3 py-2 ${formControlClass ?? ""}`}
                              />
                            )) ||
                            (item?.as === "file" && (
                              <>
                                <Field
                                  name={item?.name}
                                  type="file"
                                  className="form-control"
                                  value={undefined}
                                  onChange={(event) => {
                                    handleFileChange(event);
                                    if (item?.onChange) {
                                      item?.onChange(formik)(event);
                                    } else {
                                      formik.setFieldValue(
                                        item?.name,
                                        event.currentTarget.files[0],
                                      );
                                    }
                                  }}
                                />
                                <div className="btn-group">
                                  <span className="photo-btn">
                                    Upload Photo
                                    <svg
                                      width="14"
                                      height="17"
                                      viewBox="0 0 14 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M5 12.5924H9C9.55 12.5924 10 12.1424 10 11.5924V6.59244H11.59C12.48 6.59244 12.93 5.51244 12.3 4.88244L7.71 0.292444C7.61749 0.19974 7.5076 0.126193 7.38662 0.0760114C7.26565 0.02583 7.13597 0 7.005 0C6.87403 0 6.74435 0.02583 6.62338 0.0760114C6.5024 0.126193 6.39251 0.19974 6.3 0.292444L1.71 4.88244C1.08 5.51244 1.52 6.59244 2.41 6.59244H4V11.5924C4 12.1424 4.45 12.5924 5 12.5924ZM1 14.5924H13C13.55 14.5924 14 15.0424 14 15.5924C14 16.1424 13.55 16.5924 13 16.5924H1C0.45 16.5924 0 16.1424 0 15.5924C0 15.0424 0.45 14.5924 1 14.5924Z"
                                        fill="#F5F7FD"
                                      />
                                    </svg>
                                  </span>
                                  <p id="imageName">{imageName}</p>
                                </div>
                              </>
                            ))}

                          <ErrorMessage
                            component="div"
                            name={item?.name}
                            className="error text-red-400"
                          />
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
                <div className="col-span-full">
                  <div className="btn-wrapper">
                    <button
                      type="submit"
                      className={`${loader && "pointer-events-none"} btn-full skew-btn inline-block px-8 py-2 uppercase text-white before:bg-primary hover:opacity-90`}
                    >
                      {loader ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default FormSection;
