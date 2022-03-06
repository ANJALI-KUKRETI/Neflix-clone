import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import "./Accordion.css";

const AccordionBar = ({ title, para }) => {
  const [barOpen, setBarOpen] = useState(false);
  return (
    <div className="accordionBar">
      <div className="accTitleContainer" onClick={() => setBarOpen(!barOpen)}>
        <div className="accTitle">{title}</div>
        <div className="accBtn">{barOpen ? <BsXLg /> : <BsPlusLg />}</div>
      </div>
      {barOpen && <div className="accPara">{para}</div>}
    </div>
  );
};

export default AccordionBar;
