import { useState } from "react"
import './ClickCounter.css'

function ClickCounter() {
    const [count, setCount] = useState(0)

    return (
        <div className="clickCounter">
            <p>Счётчик { Math.floor(count / 2) }</p>
            <button onClick={() => {setCount(count + 1)}}>Нажми меня!</button> {/* onDoubleClick сначала использовал, но вроде не совсем соответствует условию задачи*/}
        </div>
    )
}

export default ClickCounter