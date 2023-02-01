import React from 'react'
import './dropDown.scss'

const DropDown = (props) => {
    return (
        <ul className="dropDown">
            {props.children.map((item) => {
                return <li>{item}</li>
            })}
        </ul>
    )
}

export default DropDown