import React from "react";
import { CgMoreO } from "react-icons/cg";
import CirclePercent from "../circlePercent/CirclePercent";
import "./card.scss";
const Card = ({
  width,
  height,
  image,
  name,
  releaseDate,
  displayIcon,
  actor,
}) => {
  return (
    <div className="card" style={{ width: `${width}px` }}>
      <div className="card__image" style={{ height: `${height}px` }}>
        <div className="image__wrapper">
          <img src={image} alt="" />
        </div>
        {displayIcon && (
          <div className="image__options">
            <CgMoreO />
          </div>
        )}
      </div>

      <div
        className="card__content"
        style={displayIcon && { padding: "24px 10px 12px 10px" }}
      >
        {displayIcon && (
          <div className="content__consensus">
            <CirclePercent number={80} />
          </div>
        )}
        <h2>{name}</h2>
        {!displayIcon && <h3>{actor}</h3>}
        <p>{releaseDate}</p>
      </div>
    </div>
  );
};

export default Card;
