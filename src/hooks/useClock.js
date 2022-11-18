import React, { useEffect, useState } from 'react'

export const useClock = () => {
    
    const [secondsGrades, setSecondsGrades] = useState( )

    const [minutesGrades, setMinutesGrades] = useState()

    const [hoursGrades, setHoursGrades] = useState()

    
    const getGrades = ()=>{
        setInterval(()=>{

            const now = new Date();
            const seconds = now.getSeconds();
            const mins = now.getMinutes();
            const hour = now.getHours();

            console.log(seconds,mins,hour)

            setSecondsGrades(((seconds / 60) * 360) + 90)
            setMinutesGrades( ((mins / 60) * 360) + ((seconds/60)*6) + 90)
            setHoursGrades(((hour) * 360) + ((mins/60)*30) + 90)
        }, 1000);
    }

    getGrades()
    

  return {
    secondsGrades,
    minutesGrades,
    hoursGrades
  }
}
