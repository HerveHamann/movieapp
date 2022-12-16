import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faRotateLeft } from "@fortawesome/free-solid-svg-icons";

const Filter = ({ Initaldata, setData }) => {
  const initialCategories = [...new Set(Initaldata.map((movie) => movie.category))];

  const [CategoriesChosed, SetCategoriesChosed] = useState([]);

  const [checked, setChecked] = useState(new Array(initialCategories.length).fill(false));

  const HandleCategoryChose = (category, position) => {
    const updatedCheckedState = checked.map((item, index) => (index === position ? !item : item));

    setChecked(updatedCheckedState);

    if (checked) {
      SetCategoriesChosed((CategoriesChosed) => [...CategoriesChosed, category]);
    }

    if (CategoriesChosed.includes(category)) {
      SetCategoriesChosed(CategoriesChosed.filter((item) => item !== category));
    }
  };

  useEffect(() => {
    setData(Initaldata);

    if (CategoriesChosed.length !== 0) {
      let filtredData = Initaldata.filter((movie) => CategoriesChosed.includes(movie.category));
      setData(filtredData);
    }
  }, [CategoriesChosed, Initaldata, setData]);

  const [openDropDown, setOpenDropDown] = useState(false);
  const ref = useRef(null);
  const handleCLickOutside = (e) => {
    if (ref.current && openDropDown && !ref.current.contains(e.target)) {
      setOpenDropDown(false);
    }
  };
  document.addEventListener("mousedown", handleCLickOutside);

  return (
    <div className="filter-container">
      <div ref={ref} className="dropdown" onClick={() => setOpenDropDown(true)}>
        <div className="dropdown-select">
          <span className="select">Genre</span>
          <FontAwesomeIcon className={openDropDown ? "icon-reverse" : "icon"} icon={faCaretDown} />
        </div>
        <div className={openDropDown ? "dropdown-list" : "hidden"}>
          {initialCategories.map((category, index) => (
            <div key={index} className="checkbox-btn">
              <input
                type="checkbox"
                name={category}
                value={category}
                checked={checked[index]}
                id={category}
                onChange={() => {
                  HandleCategoryChose(category, index);
                }}></input>
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => {
          SetCategoriesChosed([]);
          setData(Initaldata);
          setChecked(new Array(initialCategories.length).fill(false));
        }}>
        <FontAwesomeIcon icon={faRotateLeft} />
        Filters
      </button>
    </div>
  );
};

export default Filter;
