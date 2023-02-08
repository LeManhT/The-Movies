import React from "react";
import { CgMoreO } from "react-icons/cg";
import CirclePercent from "../circlePercent/CirclePercent";
import "./card.scss";
import PropTypes from "prop-types";
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
  onHoverCard,
  isRecommendation,
  vote_average,
}) => {
  return (
    <div className="card" style={{ width: `${width}px` }}>
      <div className="card__image" style={{ height: `${heightImage}px` }}>
        <div
          className="image__wrapper"
          onClick={onClickCard}
          onMouseEnter={onHoverCard}
        >
          {displayIconPlay && (
            <div className="image__icon-play">
              <i className="fas fa-play"></i>
            </div>
          )}
          <img src={image} alt={name} />
        </div>
        {(displayIconCirclePercent || displayIconPlay) && (
          <div className="image__options">
            <CgMoreO />
          </div>
        )}
      </div>

      <div
        className="card__content"
        style={{
          padding: styleCss.paddingContent,
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
        {isRecommendation ? (
          <p
            style={{
              fontSize: styleCss.fontSizeDesc,
              fontWeight: styleCss.fontWeightDesc,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                width: "70%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {description}
            </span>
            <span>{vote_average}</span>
          </p>
        ) : (
          <p
            style={{
              fontSize: styleCss.fontSizeDesc,
              fontWeight: styleCss.fontWeightDesc,
              color: styleCss.textColorDesc,
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  width: PropTypes.number,
  heightImage: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
};
export default Card;
