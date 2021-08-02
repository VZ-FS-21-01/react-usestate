import React, { useState } from "react";

const Counter = () => {

    // const [varName, setVarName] = useState(STARTWERT)
    // setVarName ist die Funktion, die wir nutzen um varName zu verändern
    const [count, setCount] = useState(0)
    const [arr, setArr] = useState([])
    const [isShown, setIsShown] = useState(false)
    // const [a, b] = [1, 2]
    // a = 1
    // b = 2
    const handleInc = () => {
        setCount(count + 1)
    }
    return (
        <div className="hooks">
            {count}
            <div>
                <button onClick={handleInc}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={() => setCount(0)}>0</button>
            </div>
            <div>
                {/* hier mutieren wir den vorherigen State und nicht direkt die Variable */}
                <button onClick={() => setCount(prevState => prevState + 10)}>+10</button>
                <button onClick={() => setCount(prevState => prevState - 10)}>-10</button>
            </div>
            <span onClick={() => setIsShown(prevState => !prevState)}>x</span>
            <h1 style={{ display: isShown ? "block" : "none" }}>Ich bin sichtbar!</h1>

            {isShown && (<h1>Ich bin sichtbar!</h1>)}

            {/* <div className='overSelect' onClick={() => setShow(!isShow)}>
                {' '}
            </div>

            {isShow && (
                <div className='checkboxes sportsboxes'>{selectAllSports}</div>
            )} */}


        </div >
    );
}

export default Counter;