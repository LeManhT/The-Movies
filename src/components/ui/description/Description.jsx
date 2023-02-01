import React from 'react'
import DropDown from '../dropDown/DropDown'
const description = () => {




    return (
        <div className="description">
            <strong className="description__title">
                Status
            </strong>
            <p>Released</p>
            <DropDown>{['Popular', 'Now Playing', 'Upcoming']}</DropDown>
        </div>
    )
}

export default description