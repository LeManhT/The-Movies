import React from "react";
import Meter from "../meter/Meter";
import "./editLeader.scss";
import PropTypes from 'prop-types';

const EditLeader = ({
  title,
  editName,
  imgAvatar,
  styleCss = {},
  countAllTime = 100,
  countThisWeek = 80,
  isMeter
}) => {
  return (
    <div className="editLeader">

      <div style={!isMeter ? { width: '40px', height: "40px" } : null}
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
        <div style={!isMeter ? { fontSize: '16px' } : { fontSize: '20px' }} className="editLeader__title">{title}</div>
        {
          isMeter ?
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
            </div> :
            <div className="edit__desc">
              <span>{editName}</span>
            </div>
        }
      </div >
    </div>
  );
};

EditLeader.propTypes = {
  editCount: PropTypes.number,
  editName: PropTypes.string,
  imgSrc: PropTypes.string
}

export default EditLeader;
