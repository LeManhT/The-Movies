import React from "react";
import Meter from "../meter/Meter";
import "./editLeader.scss";

const EditLeader = ({ title, imgAvatar }) => {
  return (
    <div className="editLeader">
      <div className="editLeader__avatar">
        <img src={imgAvatar} alt={title} />
      </div>
      <div className="editLeader__info">
        <div className="editLeader__title">RuiZafon</div>
        <div className="edit__desc">
         
            <Meter
              meterCount={273293}
              styleCss={{ widthGauge: "200px", backgroundGauge: "red" }}
            />
            <Meter
              meterCount={27323}
              styleCss={{ widthGauge: "300px", backgroundGauge: "blue" }}
            />
          
        </div>
      </div>
    </div>
  );
};

export default EditLeader;
