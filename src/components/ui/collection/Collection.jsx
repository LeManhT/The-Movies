import React from "react";
import "./collection.scss";

const Collection = ({
  collection = {},
  styleCss = {},
  divideBar,
  children,
}) => {
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
            width: styleCss.widthTitle,
            fontSize: styleCss.fontSizeTitle,
            fontWeight: styleCss.fontWeightTitle,
            lineHeight: styleCss.lineHeightTitle,
          }}
        >
          <p>{collection.title}</p>
        </div>
        {divideBar ? (
          <hr
            style={{
              width: styleCss.widthDivideBar,
              margin: styleCss.marginDivideBar,
            }}
          ></hr>
        ) : null}
        <div
          className="collection__desc"
          style={{
            fontSize: styleCss.fontSizeDesc,
            fontWeight: styleCss.fontWeightDesc,
          }}
        >
          <p>{collection.desc}</p>
        </div>
        <div
          className="collection__other"
          style={{
            width: styleCss.widthOther,
            marginTop: styleCss.marginTopOther,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collection;
