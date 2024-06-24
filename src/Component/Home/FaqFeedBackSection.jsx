import Accordion from "../Global/Accordion";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ContactForm from "../Global/ContactForm";
import usePost from "../../Global/Apis/UsePost";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const FaqFeedBackSection = () => {
  const [loader, setLoader] = useState(false);
  const { post } = usePost("faqs");
  const handleFaq = async (values, { resetForm }) => {
    setLoader(true);
    await post(values, "Faq");
    setLoader(false);
    resetForm();
  };
  return (
    <>
      <section className="faq-feed-section xl:section-break xl:bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,1)_50%,_rgba(232,232,233,1)_50%,_rgba(232,232,233,1)_100%)]">
        <div className="mx-auto xl:container">
          <div className="flex flex-wrap">
            <div className="side-padding w-full py-10 xl:w-1/2 xl:py-0 xl:pr-8">
              <div className="container mx-auto">
                <div className="heading-wrapper mb-5">
                  <h2 className="heading">faqs</h2>
                </div>
                <Accordion defaultIcon={<FaPlus />} expandIcon={<FaMinus />} />
                <div className="faq-ques py-6">
                  <h4 className="mb-4">Feel free to ask your question</h4>
                  <Formik
                    initialValues={{
                      question: "",
                    }}
                    validationSchema={Yup.object().shape({
                      question: Yup.string().required("required"),
                    })}
                    onSubmit={(values, { resetForm }) =>
                      handleFaq(values, { resetForm })
                    }
                  >
                    {(formik) => (
                      <Form onSubmit={formik.handleSubmit}>
                        <div className="form-control flex justify-between border-b border-light-grey pb-2 ">
                          <Field
                            type="text"
                            name="question"
                            placeholder="Type here"
                            className={`w-full pr-4 outline-0`}
                          />
                          <button
                            type="submit"
                            className="btn-full px-6 py-1 text-sm font-normal before:bg-secondary hover:opacity-90"
                          >
                            Ask
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
                <div className="btn-wrapper">
                  <Link
                    className="btn-transparent skew-btn inline-block px-8 py-2 uppercase text-primary before:border-primary hover:text-white hover:before:bg-primary"
                    to="/"
                  >
                    View All FAQs
                  </Link>
                </div>
              </div>
            </div>
            <div className="side-padding w-full bg-[#e8e8e9] py-10 xl:w-1/2 xl:bg-transparent xl:py-0 xl:pl-8">
              <div className="container mx-auto">
                <div className="heading-wrapper mb-5">
                  <h2 className="heading">Feedback form</h2>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqFeedBackSection;
