import React from "react";
import ModalVideo from "react-modal-video";
import PropTypes from "prop-types";
import "./modalVideo.scss";

const ModalPreview = ({ keyVideo, isOpen = false, onClose }) => {
  return (
    <div className="modalVideo">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={keyVideo}
        onClose={onClose}
      />
    </div>
  );
};

ModalPreview.propTypes = {
  keyVideo: PropTypes.string,
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default ModalPreview;
