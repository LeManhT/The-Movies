import React from 'react'
import ModalVideo from 'react-modal-video'
import './modalVideo.scss'

const ModalPreview = ({ keyVideo, isOpen = false, children, onClose }) => {
    console.log(keyVideo);
    return (
        <>
            <div className="modalVideo">
                <ModalVideo channel='youtube' allowFullScreen autoplay isOpen={isOpen} videoId={keyVideo} onClose={onClose} />
                {children}
            </div>
        </>
    )
}

export default ModalPreview