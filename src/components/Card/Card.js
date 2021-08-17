import React from "react";
import "./styles.css";

const Card = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        const { id, title, category, description, image } = item; //destructuring
        return (
          <div className="card-container" key={id}>
            <h2>{title}</h2>
            <h4>{category}</h4>
            <div>{description}</div>
            <div>
              <img alt="food-img" src={image} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
