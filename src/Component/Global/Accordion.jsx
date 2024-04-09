import React, { useState } from "react";
import { faqData } from "../../Global/Datas/HomeData";

const Accordion = ({ defaultIcon, expandIcon }) => {
  const [expandedPanel, setExpandedPanel] = useState(null);
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
      {faqData.slice(0,4).map((item, index) => (
        <div className="accordion-panel border-b border-light-grey py-3" key={index}>
          <div
            className={`accordion-title flex gap-4 items-center pr-6 uppercase  ${isActive(item.id) ? "active" : ""}`}
            onClick={() => togglePanel(item.id)}
          >
            {item.title}
            <span className="accordion-icon">
              {isActive(item.id) ? expandIcon : defaultIcon}
            </span>
          </div>
          {isActive(item.id) && (
            <div className="accordion-content text-grey tracking-wide text-sm pt-2">
              <p> {item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
