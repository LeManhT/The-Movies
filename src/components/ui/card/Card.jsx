import React from "react";
import { CgMoreO } from "react-icons/cg";
import CirclePercent from "../circlePercent/CirclePercent";
import "./card.scss";
import PropTypes from 'prop-types';
const Card = ({
  width,
  heightImage,
  image,
  name,
  description,
  displayIconCirclePercent,
  vote,
  styleCss = {},
  displayIconPlay,
  onClickCard,
}) => {

  return (
    <div className="card" style={{ width: `${width}px` }}>
      <div className="card__image" style={{ height: `${heightImage}px` }}>
        <div className="image__wrapper" onClick={onClickCard}>
          {displayIconPlay && (
            <div className="image__icon-play">
              <i class="fas fa-play"></i>
            </div>
          )}
          <img src={image} alt={name} />
        </div>

        <div className="image__options">
          <CgMoreO />
        </div>
      </div>

      <div
        className="card__content"
        style={{
          padding: "24px 10px 0px 10px",
          textAlign: styleCss.textAlign,
        }}
      >
        {displayIconCirclePercent && (
          <div className="content__consensus">
            <CirclePercent number={vote} />
          </div>
        )}
        <h2
          onClick={onClickCard}
          style={{
            fontSize: styleCss.fontSizeName,
            fontWeight: styleCss.fontWeightName,
            color: styleCss.textColorName,
          }}
        >
          {name}
        </h2>
        <p
          style={{
            fontSize: styleCss.fontSizeDesc,
            fontWeight: styleCss.fontWeightDesc,
            color: styleCss.textColorDesc,
          }}
        >
          {description}
        </p>
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
