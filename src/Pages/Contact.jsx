import React from "react";
import Breadcrumbs from "../Component/Global/BreadCrumbs";
import { FiPhone } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LiaClock } from "react-icons/lia";
import { Link } from "react-router-dom";

import ContactForm from "../Component/Contact/ContactForm";
import useGet from "../Global/Apis/useGet";

const Contact = () => {
  const { data: settings } = useGet("settings");

  const contactData = [
    {
      name: "Call Us",
      value: ["01 - 4520025", "4541031", "4536532", settings?.phone],
      icon: <FiPhone />,
      path: "tel:",
    },
    {
      name: "Address",
      value: settings?.location,
      icon: <TfiLocationPin />,
    },
    {
      name: "Email",
      value: settings?.email,
      icon: <HiOutlineEnvelope />,
      path: `mailto:${settings?.email}`,
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
            src={settings?.map_url}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />
        </div>
        <div className="side-padding">
          <div className="section-break mx-auto max-w-[1000px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                            <>
                              <Link
                                key={index}
                                to={`${item?.path}${phone}`}
                                className="text-sm text-black opacity-75 duration-200 hover:text-primary hover:underline inline-block"
                              >
                                {phone}
                              </Link>
                              {console.log(phone?.length)}
                              {(item?.value?.length ) > (index + 1) && <span className="mx-2 text-black opacity-75">/</span>}
                            </>
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
