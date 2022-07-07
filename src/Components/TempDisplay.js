import React from 'react'
import './TempDisplay.css'

const TempDisplay = (Props) => {
    return (
        <div className="A1-Display">
            <p>
                {Props.Weather.temp}&deg; <img src={Props.Weather.icon} alt="" />
            </p>
            <span>{Props.Weather.name}/{Props.Weather.country}</span>
        </div>
    )
}
export default TempDisplay
