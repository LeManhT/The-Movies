import React from "react";
import "./searchItemResult.scss";

const SearchItemResult = ({ imgSrc, title, releaseDate, overview, isPeople }) => {
  return (
    <>
      {imgSrc || title || releaseDate || overview ? (
        <div className="searchItem__result searchResult__wrapper">
          <div className="searchItem__image" style={!isPeople ? { "height": "141px" } : { "height": "auto" }}>
            <img src={imgSrc} style={isPeople ? { "border-radius": "8px" } : { "border-radius": "0px" }} alt="" />
          </div>

          <div className="searchItem__details ">
            <div className="details__title">
              <h2>{title}</h2>
              <div className="details__release_date">
                <span>{releaseDate}</span>
              </div>
            </div>

            <div className="details__overview">
              <p>{overview}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SearchItemResult;
