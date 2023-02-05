import React from "react";
import { CgMoreO } from "react-icons/cg";
import CirclePercent from "../circlePercent/CirclePercent";
import "./card.scss";
const Card = ({
  width,
  heightImage,
  image,
  name,
  description,
  displayIcon,
  vote,
  styleCss = {},
  onClickCard,
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
        style={{
          padding: "24px 10px 0px 10px",
          textAlign: styleCss.textAlign,
        }}
      >
        {displayIcon && (
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

export default Card;
