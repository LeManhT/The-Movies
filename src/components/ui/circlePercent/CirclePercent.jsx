import React from 'react'
import './circlePercent.scss'

const CirclePercent = ({number, colorPrimary, colorSecondary}) => {
    return (
        <div class="progress-circle over50 p100">
            <span>{number}<sup>%</sup></span>
            <div class="left-half-clipper">
                <div class="first50-bar" style={{backgroundColor: `${colorPrimary}`}} />
                <div class="value-bar" style={{border: `0.45rem solid ${colorSecondary}`}} />
            </div>
        </div>
    )
}

export default CirclePercent