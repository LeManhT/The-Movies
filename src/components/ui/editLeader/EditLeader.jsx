import React from "react";
import Meter from "../meter/Meter";
import "./editLeader.scss";

const EditLeader = ({
  title,
  imgAvatar,
  styleCss = {},
  countAllTime = 100,
  countThisWeek = 80,
}) => {
  return (
    <div className="editLeader">
      <div
        className={
          imgAvatar ? "editLeader__avatarImg" : "editLeader__avatarText"
        }
      >
        {imgAvatar ? (
          <img src={imgAvatar} alt={title} />
        ) : (
          <span>{title ? title.slice(0, 1).toUpperCase() : "?"}</span>
        )}
      </div>
      <div className="editLeader__info">
        <div className="editLeader__title">{title}</div>
        <div className="edit__desc">
          <Meter
            meterCount={countAllTime}
            styleCss={{
              widthGauge: styleCss.widthDescFirst,
              backgroundGauge: styleCss.backgroundDescFirst,
            }}
          />
          <Meter
            meterCount={countThisWeek}
            styleCss={{
              widthGauge: styleCss.widthDescSecond,
              backgroundGauge: styleCss.backgroundDescSecond,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditLeader;
