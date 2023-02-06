import React from "react";
import "./listHorizontal.scss";

const ListHorizontal = ({
  titleTab,
  listItemTab = [],
  itemTabActive,
  onClickTab,
  styleCssTabPrimary = {
    backgroundImage: "",
    backgroundSize: "",
    backgroundPosition: "",
    colorTitle: "$text-color",
    borderMain: "1px solid yellow",
    textColor: "blue",
    backgroundColor: "transparent",
    textColorActive: "red",
    backgroundColorActive:
      "linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%)",
  },
  children,
}) => {
  return (
    <div className="list-horizontal" style={{
      backgroundImage: `url("${styleCssTabPrimary.backgroundImage}")`,
      backgroundSize: styleCssTabPrimary.backgroundSize,
      backgroundPosition: styleCssTabPrimary.backgroundPosition
    }}>
      <div className="list-horizontal__header">
        <p
          className="list-horizontal__title"
          style={{ color: styleCssTabPrimary.colorTitle }}
        >
          {titleTab}
        </p>
        <div
          className="list-horizontal__main"
          style={{ border: styleCssTabPrimary.borderMain }}
        >
          {listItemTab &&
            listItemTab.map((item, index) => {
              return (
                <div
                  key={index}
                  className="detail"
                  style={{
                    backgroundColor: styleCssTabPrimary.backgroundColor,
                  }}
                  onClick={() => onClickTab(item)}
                >
                  <p
                    className={item === itemTabActive ? "active" : ""}
                    style={{
                      color:
                        item === itemTabActive
                          ? styleCssTabPrimary.textColorActive
                          : styleCssTabPrimary.textColor,
                      background:
                        item === itemTabActive &&
                        styleCssTabPrimary.backgroundColorActive,
                    }}
                  >
                    {item}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="list-horizontal__content scroll">{children}</div>
    </div>
  );
};

export default ListHorizontal;
