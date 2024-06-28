import React, { useState } from "react";
import { faqData } from "../../Global/Datas/HomeData";
import useGet from "../../Global/Apis/useGet";
import HtmlParse from "./HtmlParse";

const Accordion = ({ defaultIcon, expandIcon, view }) => {
  const [expandedPanel, setExpandedPanel] = useState(null);
  const { data: faqs } = useGet("faqs");
  const togglePanel = (panelId) => {
    if (expandedPanel === panelId) {
      setExpandedPanel(null);
    } else {
      setExpandedPanel(panelId);
    }
  };
  const isActive = (panelId) => {
    return expandedPanel === panelId;
  };
  if (expandIcon === null) {
    expandIcon = defaultIcon;
  }

  return (
    <div className="accordion">
      {(!faqs ? faqs : faqData)?.slice(0, view)?.map((item, index) => (
        <div
          className="accordion-panel border-b border-light-grey py-3"
          key={index}
        >
          <div
            className={`accordion-title flex items-center gap-4 pr-6 text-base uppercase  ${isActive(item?.id) ? "active" : ""}`}
            onClick={() => togglePanel(item?.id)}
          >
            <HtmlParse data={item?.question} />
            <span className="accordion-icon">
              {isActive(item?.id) ? expandIcon : defaultIcon}
            </span>
          </div>
          {isActive(item?.id) && (
            <div className="accordion-content pt-2 text-sm tracking-wide text-grey">
              <HtmlParse data={item?.answer} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
