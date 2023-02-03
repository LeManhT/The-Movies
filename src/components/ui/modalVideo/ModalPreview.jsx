import React from 'react'
import ModalVideo from 'react-modal-video'

const ModalPreview = ({ keyVideo, isOpen = false, children, handleClose }) => {
    console.log(keyVideo);
    return (
        <>
            <div className="modalVideo">
                <ModalVideo channel='youtube' allowFullScreen autoplay isOpen={isOpen} videoId={keyVideo} onClose={handleClose} />
                {children}
            </div>
        </>
    )
}

export default ModalPreview