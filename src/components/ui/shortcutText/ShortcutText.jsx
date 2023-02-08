import React from 'react'
import './shortcutText.scss'
import PropTypes from 'prop-types';

const ShortcutText = ({ backgroundImage, children }) => {
    return (
        <div className="shortcut__text">
            <span className='shortcut__icon' style={{ backgroundImage: `url(${backgroundImage})` }}></span>
            {children}
        </div>
    )
}

ShortcutText.propTypes = {
    backgroundImage: PropTypes.string,
    children: PropTypes.node
}
export default ShortcutText