import React from "react";

export const Pagination = ({ currentPage, totalPages, handlePage }) => {
  const btnArray = new Array(totalPages).fill(0).map((_, index) => index + 1);

  return (
    <div style={{ textAlign: "right" }}>
      {btnArray.map((btn) => (
        <button
          style={{
            margin: "2px",
            // padding: " 8px",
            width: "30px",
            height: "30px",
            border: "none",
            fontSize: "15px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "50%",
          }}
          onClick={() => handlePage(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};
