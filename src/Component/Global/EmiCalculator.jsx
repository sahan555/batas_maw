import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FloatingInput from "./FloatingInput";
const EmiCalculator = () => {
  const initialValues = {
    vehicle_price: "",
    interest: "",
    amortization: "",
    down_payment: "",
  };
  const schema = Yup.object().shape({
    vehicle_price: Yup.number().positive().required("required"),
    interest: Yup.number().positive().required("required"),
    amortization: Yup.number().positive().required("required"),
    down_payment: Yup.number().positive().required("required"),
  });

  return (
    <section className="emi-section ">
      <div className="section-break bg-secondary">
        <div className="container mx-auto">
          <div className="heading-wrapper mb-14 text-center text-white">
            <h3 className="heading mb-2 !text-white">emi Calculator</h3>
            <p className="font-medium uppercase text-light-grey opacity-50">
              Please fill the required fields
            </p>
          </div>
          <div className="emi-form">
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {(formik) => (
                <Form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-wrap justify-center gap-20"
                >
                  <div className="form-group relative z-0 w-[15%]">
                    <FloatingInput
                      type="number"
                      name="vehicle_price"
                      classname={
                        formik.errors.vehicle_price &&
                        formik.touched.vehicle_price
                          ? "error"
                          : ""
                      }
                      labelname="Vehicle price (rs.)*"
                      onchange={formik.handleChange}
                    />
                  </div>
                  <div className="form-group relative z-0 w-[15%]">
                    <FloatingInput
                      type="number"
                      name="interest"
                      classname={
                        formik.errors.interest && formik.touched.interest
                          ? "error"
                          : ""
                      }
                      labelname="Interest Rate (%)*"
                      onchange={formik.handleChange}
                    />
                  </div>
                  <div className="form-group relative z-0 w-[15%]">
                    <FloatingInput
                      type="number"
                      name="amortization"
                      classname={
                        formik.errors.amortization &&
                        formik.touched.amortization
                          ? "error"
                          : ""
                      }
                      labelname="Amortization period (Years)*"
                      onchange={formik.handleChange}
                    />
                  </div>
                  <div className="form-group relative z-0 w-[15%]">
                    <FloatingInput
                      type="number"
                      name="down_payment"
                      classname={
                        formik.errors.down_payment &&
                        formik.touched.down_payment
                          ? "error"
                          : ""
                      }
                      labelname="Down payment (Rs.)*"
                      onchange={formik.handleChange}
                    />
                  </div>
                  <div className="btn-wrapper">
                    <button
                      type="submit"
                      className="skew-btn btn-transparent h-full px-9 text-white hover:text-secondary hover:before:bg-white"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div className="emi-calculated">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-center text-sm">
            <thead className="bg-[#DFEFFF] text-xs uppercase">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 uppercase text-secondary  text-base "
                  colSpan={2}
                >
                  emi payment information
                </th>
              </tr>
            </thead>
            <tbody className="text-left uppercase font-medium">
              <tr className="odd:bg-[#D0E9FF]">
                <th
                  scope="row"
                  className="w-[50%] whitespace-nowrap px-6 py-4 font-medium  text-black"
                >
                  <h4 className="ml-auto w-60 text-left">principal (rs.)</h4>
                </th>
                <td className="w-[50%] px-6 py-4">
                  <p className="w-60 mr-auto text-right">10,00,000 (rs.)</p>
                  </td>
              </tr>
              <tr className="even:bg-[#DFEFFF]">
                <th
                  scope="row"
                  className="w-[50%] whitespace-nowrap px-6 py-4 font-medium  text-black "
                >
                  <h4 className="ml-auto w-60 text-left">down payment (rs.)</h4>
                </th>
                <td className="w-[50%] px-6 py-4">
                  <p className="w-60 mr-auto text-right">1,00,000 (rs.)</p>
                  </td>
              </tr>
              <tr className="odd:bg-[#D0E9FF]">
                <th
                  scope="col"
                  className="w-[50%] whitespace-nowrap px-6 py-4 font-medium  text-black"
                >
                  <h4 className="ml-auto w-60 text-left">
                    Monthly Payment (rs.)
                  </h4>
                </th>
                <td className="w-[50%] px-6 py-4">
                  <p className="w-60 mr-auto text-right">10,00,000 (rs.)</p>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EmiCalculator;
