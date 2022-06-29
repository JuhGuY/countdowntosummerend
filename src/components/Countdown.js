import { useState } from "react"

const Countdown = () => {

    const [daysS, setDay] = useState(0)
    const [hoursS, setHour] = useState(0)
    const [minsS, setMin] = useState(0)
    const [secsS, setSec] = useState(0)

    const [absDays, setAbsDay] = useState(0)
    const [absHours, setAbsHour] = useState(0)
    const [absMins, setAbsMin] = useState(0)
    const [absSecs, setAbsSec] = useState(0)


    const countdownDate = new Date("August 9 2022").getTime();
    
    const update = setInterval(function() {
        let timeNow = new Date().getTime();
        var timeLeft = countdownDate - timeNow

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

        let absDay = Math.floor(timeLeft / 86400000)
        let absHour = Math.floor(timeLeft / 3600000)
        let absMin = Math.floor(timeLeft / 60000)
        let absSec = Math.floor(timeLeft / 1000)
        

        setDay(days)
        setHour(hours)
        setMin(mins)
        setSec(secs)

        setAbsDay(absDay)
        setAbsHour(absHour)
        setAbsMin(absMin)
        setAbsSec(absSec)


    }, 1000)

  return (
    <div className="countdown">
      <div className="sub">
        <div className="totalTime">
            <h2>{daysS} days, {hoursS} hours, {minsS} minutes, {secsS} seconds</h2>
        </div>
        <hr></hr>
        <div className="absoluteTime">
            <h2>Days: {absDays}</h2>

            <h2>Hours: {absHours}</h2>
            
            <h2>Minutes: {absMins}</h2>
            
            <h2>Seconds: {absSecs}</h2>
            
        </div>
      </div>
    </div>
  )
}



export default Countdown
