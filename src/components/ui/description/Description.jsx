import React from 'react'
import DropDown from '../dropDown/DropDown'
import Meter from '../meter/Meter'
import Selectors from '../selectors/Selectors'

const description = () => {

    return (
        <div className="description">
            <strong className="description__title">
                Status
            </strong>
            <p>Released</p>
            <DropDown>{['Popular', 'Now Playing', 'Upcoming']}</DropDown>
            <Selectors />
            <Meter meterCount={2758000} />
        </div>
    )
}

export default description