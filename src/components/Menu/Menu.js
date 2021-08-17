import React from "react";
import "./styles.css";

const Menu = ({ handleClick, uniqueCategories }) => {
  return (
    <>
      <div className="menu-bar">
        {uniqueCategories.map((item) => {
          return (
            <button
              key={item}
              onClick={() => {
                handleClick(item);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
