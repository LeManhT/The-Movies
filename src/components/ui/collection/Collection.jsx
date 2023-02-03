import React from "react";
import "./collection.scss";

const Collection = ({ collection = {}, styleCss = {}, children }) => {
  return (
    <div
      className="collection__wrapper"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(3, 37, 65, 0.8) 0%, rgba(3, 37, 65, 0) 100%),
                url("${styleCss.backgroundImage}")`,
      }}
    >
      <div className="collection__content">
        <div
          className="collection__title"
          style={{
            fontSize: styleCss.fontSizeTitle,
            fontWeight: styleCss.fontWeightTitle,
          }}
        >
          <h2>{collection.title}</h2>
        </div>
        <div
          className="collection__desc"
          style={{
            fontSize: styleCss.fontSizeDesc,
            fontWeight: styleCss.fontWeightDesc,
          }}
        >
          <h3>{collection.desc}</h3>
        </div>
        {collection.hr ? <hr></hr> : null}
        <div className="collection__other">{children}</div>
      </div>
    </div>
  );
};

export default Collection;
