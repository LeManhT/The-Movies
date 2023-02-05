import React from "react";
import { CgMoreO } from "react-icons/cg";
import CirclePercent from "../circlePercent/CirclePercent";
import "./card.scss";
const Card = ({
  width,
  heightImage,
  image,
  name,
  releaseDate,
  displayIcon,
  vote,
  onClickCard,
  actor,
}) => {
  return (
    <div className="card" style={{ width: `${width}px` }}>
      <div className="card__image" style={{ height: `${heightImage}px` }}>
        <div className="image__wrapper" onClick={onClickCard}>
          <img src={image} alt={name} />
        </div>
        {displayIcon && (
          <div className="image__options">
            <CgMoreO />
          </div>
        )}
      </div>

      <div
        className="card__content"
        style={displayIcon && { padding: "24px 10px 0px 10px" }}
      >
        {displayIcon && (
          <div className="content__consensus">
            <CirclePercent number={vote} />
          </div>
        )}
        <h2 onClick={onClickCard}>{name}</h2>
        {!displayIcon && <h3>{actor}</h3>}
        <p>{releaseDate}</p>
      </div>
    </div>
  );
};

export default Card;
