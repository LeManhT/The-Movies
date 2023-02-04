import React from "react";
import "./discussion.scss";
import PropTypes from 'prop-types';

const Discussion = ({ img, link, status, count, date }) => {
  return (
    <div className="discussion">
      <div className="subject">
        <div className="avatar">
          <img src={img} alt="" />
        </div>
        <div className="link">
          <p>{link}</p>
        </div>
      </div>
      <div className="status">{status}</div>

      <p>{count}</p>
      <p>
        <p>{date}</p>
        <p>by movie_nazi</p>
      </p>
    </div>
  );
};

Discussion.propTypes = {
  img: PropTypes.string,
  status: PropTypes.string,
  count: PropTypes.number,
  date: PropTypes.date
}

export default Discussion;
