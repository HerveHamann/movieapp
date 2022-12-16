import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Select = ({ type, SetNumberOfPagesSelected, numberOfPagesSelected }) => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const ref = useRef(null);

  const handleCLickOutside = (e) => {
    if (ref.current && openDropDown && !ref.current.contains(e.target)) {
      setOpenDropDown(false);
    }
  };
  document.addEventListener("mousedown", handleCLickOutside);

  const SaveSelection = (item) => {
    SetNumberOfPagesSelected(item.number);
  };

  return (
    <div className="select-container">
      <div className={"select-title"}>Show by:</div>
      <div
        ref={ref}
        className="dropdown"
        onClick={() => (openDropDown ? setOpenDropDown(false) : setOpenDropDown(true))}>
        <div className="dropdown-select">
          <span className="selected">{numberOfPagesSelected} </span>
          <FontAwesomeIcon className={openDropDown ? "icon-reverse" : "icon"} icon={faCaretDown} />
        </div>
        <div className={openDropDown ? "dropdown-list" : "hidden"}>
          {type.map((item) => (
            <div className="dropdown-item" onClick={() => SaveSelection(item)} key={item.number}>
              {item.number}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
