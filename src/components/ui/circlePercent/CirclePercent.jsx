import React from 'react'
import './circlePercent.scss'

const CirclePercent = () => {
    return (
        <div class="progress-circle over50 p100">
            <span>100%</span>
            <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
            </div>
        </div>
    )
}

export default CirclePercent