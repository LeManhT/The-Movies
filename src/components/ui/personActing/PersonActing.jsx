import React from "react";
import "./personActing.scss";

const PersonActing = ({year, nameMovie, nameVoice}) => {
  return (
    <div className="personActing">
      <p className="personActing__year">{year ? year : "—"}</p>
      <div className="personActing__seperator" />
      <p className="personActing__desc">
        <span className="personActing__desc-movie">{nameMovie}</span>
        <span className="personActing__desc-as"> as </span>
        <span className="personActing__desc-voice">
          {nameVoice}
        </span>
      </p>
    </div>
  );
};

export default PersonActing;
