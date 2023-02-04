import React from "react";
import { CgMoreO } from "react-icons/cg";
import CirclePercent from "../circlePercent/CirclePercent";
import "./card.scss";
import PropTypes from 'prop-types';
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
    <div className="card" style={displayIcon ? { width: `${width}px` } : { width: `${width}px`, boxShadow: "0 2px 8px rgb(0 0 0 / 10%)" }}>
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

Card.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
  displayIcon: PropTypes.bool,
  actor: PropTypes.string
}
export default Card;
