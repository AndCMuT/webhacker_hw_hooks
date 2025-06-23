import { useEffect, useState } from "react"

function CountDownTimer() {


    const [seconds, setSeconds] = useState(10);


    useEffect (() => {
        while (seconds !== 0){
            const interval = setInterval(() => {
            setSeconds(seconds - 1)
            }, 1000)
            return() => clearInterval(interval);
        }
    }, [seconds])


    return (
        <p style = {{color: 'rgb(121, 121, 201)', fontSize: '30px', fontWeight: '700'}} >Timer: { seconds == 0 ? 'Time is over' : seconds }</p>
    )
}

export default CountDownTimer
