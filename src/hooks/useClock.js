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

            setSecondsGrades(seconds*6)
            setMinutesGrades(mins*6)
            setHoursGrades(hour*30+mins/2)
        }, 1000);
    }

    getGrades()
    

  return {
    secondsGrades,
    minutesGrades,
    hoursGrades
  }
}
