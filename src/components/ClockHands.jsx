import React from 'react'
import { useClock } from '../hooks/useClock'

export const ClockHands = () => {

    const {secondsGrades,minutesGrades, hoursGrades} = useClock()

    return (
      <>
          <div style={{transform:`rotate(${hoursGrades}deg)`}} className="hand hour" data-hour-hand></div>
          <div style={{transform:`rotate(${minutesGrades}deg)`}} className="hand minute" data-minute-hand></div>
          <div style={{transform:`rotate(${secondsGrades}deg)`}} className="hand second" data-second-hand></div>
      </>
    )
}
