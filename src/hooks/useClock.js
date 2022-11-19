import {useState } from 'react'

export const useClock = () => {
    
    const [secondsGrades, setSecondsGrades] = useState()
    const [minutesGrades, setMinutesGrades] = useState()
    const [hoursGrades, setHoursGrades] = useState()

    const getGrades = ()=>{
        setInterval(()=>{
            const now = new Date();

            setSecondsGrades(now.getSeconds()*6)
            setMinutesGrades(now.getMinutes()*6)
            setHoursGrades(now.getHours()*30+ now.getMinutes()/2)
        }, 1000);
    }
    
    getGrades()
    
  return {
    secondsGrades,
    minutesGrades,
    hoursGrades
  }
}
