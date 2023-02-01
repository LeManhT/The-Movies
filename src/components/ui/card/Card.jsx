import React from "react";
import { CgMoreO } from "react-icons/cg";
import CirclePercent from "../circlePercent/CirclePercent";
import "./card.scss";
const Card = ({ width, height, image, name, releaseDate }) => {
  return (
    <div className="card" style={{ width: `${width}px` }}>
      <div className="card__image" style={{ height: `${height}px` }}>
        <div className="image__wrapper">
          <img src={image} alt="" />
        </div>
        <div className="image__options">
          <CgMoreO />
        </div>
      </div>

      <div className="card__content">
        <div className="content__consensus">
          <CirclePercent
            number="50"
            colorPrimary="#20c876"
            colorSecondary="#1f4429"
          />
        </div>
        <h2>{name}</h2>
        <p>{releaseDate}</p>
      </div>
    </div>
  );
};

export default Card;
