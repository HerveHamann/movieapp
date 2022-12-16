import React, { useState, useEffect } from "react";

const Pagination = ({ Initaldata, data, setItemShowed, numberOfPagesSelected }) => {
  let numberOfPages = Math.ceil(data.length / numberOfPagesSelected);

  let ArrayOfPages = [...Array(numberOfPages).keys()];
  const [offSet, SetOffSet] = useState(0);

  const [Page, SetPage] = useState(0);

  useEffect(() => {
    if (data.length !== Initaldata.length) {
      SetOffSet(0);
    }
  }, [data.length, Initaldata.length]);

  useEffect(() => {
    let positionOnPage = Math.floor(offSet / numberOfPagesSelected);

    SetPage(positionOnPage);
    setItemShowed(data.slice(positionOnPage * numberOfPagesSelected, (positionOnPage + 1) * numberOfPagesSelected));
  }, [Page, data, numberOfPagesSelected, setItemShowed, offSet]);

  return (
    <div className="pagination">
      <div className="button-container">
        <button
          className={Page === 0 ? "prevnext-button-disabled" : "prevnext-button"}
          onClick={
            Page !== 0
              ? () => {
                  SetOffSet((Page - 1) * numberOfPagesSelected);
                  SetPage(Page - 1);
                }
              : () => {}
          }>
          Previous
        </button>
        {ArrayOfPages.map((page, index) => (
          <button
            className={Page === page ? "pagination-button-focus" : "pagination-button"}
            key={index}
            onClick={() => {
              SetOffSet(page * numberOfPagesSelected);
              SetPage(page);
            }}>
            {page + 1}
          </button>
        ))}{" "}
        <button
          className={Page === ArrayOfPages.length - 1 ? "prevnext-button-disabled" : "prevnext-button"}
          onClick={
            Page !== ArrayOfPages.length - 1
              ? () => {
                  SetOffSet((Page + 1) * numberOfPagesSelected);
                  SetPage(Page + 1);
                }
              : () => {}
          }>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
