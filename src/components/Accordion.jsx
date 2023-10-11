import React, { useState } from "react";
import { dataCollection } from "../../src/data";
import { BiMinus, BiPlus } from "react-icons/bi";
import faq from "/img/faq.png";

const Accordion = () => {
  const [accordion, setActiveAccordion] = useState(-1);

  const toggleAccordion = (index) => {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  };
  return (
    <>
      <div className="container">
        <div>
          <span className="accordion__title">Frequently asked questions</span>
          <div className="header">
            <h1>Let's answer some of your questions</h1>
            <div>
              <img src={faq} alt="faq" className="img" />
            </div>
          </div>
        </div>
        <div className="accordion__faq">
          {dataCollection.map((item, index) => (
            <div key={index} onClick={() => toggleAccordion(index)}>
              <div className="accordion__faq-heading">
                <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                <div>
                  {accordion === index ? (
                    <div className="verticle">
                      <BiMinus />
                    </div>
                  ) : (
                    <div className="horizental">
                      <BiPlus />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <p className={accordion === index ? "active" : "inactive"}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordion;
