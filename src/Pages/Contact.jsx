import React from "react";
import Breadcrumbs from "../Component/Global/BreadCrumbs";
import { FiPhone } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LiaClock } from "react-icons/lia";
import { Link } from "react-router-dom";

import ContactForm from "../Component/Contact/ContactForm";

const Contact = () => {
  const contactData = [
    {
      name: "Call Us",
      value: ["01 - 4520025", "4541031", "4536532", "9802311655"],
      icon: <FiPhone />,
      path: "tel:",
    },
    {
      name: "Address",
      value: "Tangal Chowk, Laxmi Narayan Temple, Kathmandu",
      icon: <TfiLocationPin />,
    },
    {
      name: "Email",
      value: "info@batasmaw.com",
      icon: <HiOutlineEnvelope />,
      path: "mailto:",
    },
    {
      name: "Open Time",
      value: "Mon - Fri : 09:30 am to 5:30 pm",
      icon: <LiaClock />,
    },
  ];

  return (
    <>
      <Breadcrumbs />
      <section className="contact-page">
        <div className="map-wrapper h-[400px]">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56511.94459089053!2d85.25536254863277!3d27.717393199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bfe24eb713%3A0xd52e521d069297c8!2sBATAS%20Organization!5e0!3m2!1sen!2snp!4v1719207595256!5m2!1sen!2snp"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />
        </div>
        <div className="side-padding">
          <div className="section-break mx-auto max-w-[1000px]">
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-1">
                <ul className="contact-info">
                  {contactData?.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-3 rounded-lg border p-4 [&:not(:last-child)]:mb-5"
                    >
                      <div className="info-icon text-2xl text-primary">
                        {item?.icon}
                      </div>
                      <div className="info-part">
                        <h4 className="text-lg">{item?.name}</h4>
                        {Array.isArray(item?.value) ? (
                          item?.value?.map((phone, index) => (
                            <Link
                              key={index}
                              to={`${item?.path}${phone}`}
                              className="text-sm text-black opacity-75 duration-200 hover:text-primary hover:underline [&:not(:last-child)]:after:mx-2 [&:not(:last-child)]:after:content-['/']"
                            >
                              {phone}
                            </Link>
                          ))
                        ) : (
                          <Link
                            to={`${item?.path}${item?.value}`}
                            className={`text-sm text-black  opacity-75 duration-200 hover:text-primary hover:underline ${!item?.path && "pointer-events-none"}`}
                          >
                            {item?.value}
                          </Link>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-1">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
