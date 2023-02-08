import React from "react";
import "./editLeader.scss";
import PropTypes from 'prop-types';

const EditLeader = ({ editCount, editName, imgSrc }) => {
  return (
    <div className="editLeader">
      <div className="editLeader__avatar">
        <img src={imgSrc} alt="" />
      </div>
      <div className="editLeader__info">
        <p className="editCount">
          {editCount}
          <br />
          <span>{editName}</span>
        </p>
      </div>
    </div>
  );
};

EditLeader.propTypes = {
  editCount: PropTypes.number,
  editName: PropTypes.string,
  imgSrc: PropTypes.string
}

export default EditLeader;
