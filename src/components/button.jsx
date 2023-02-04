import '../App.css';
import * as React from 'react';
import { useState } from 'react';

function Button(props) {
    const [count, setCount] = useState(0);

    const startGame = () => setCount(count + 1);

    return (
        <div>
            {count === 0 ? (
            <button onClick={startGame} className='Button'>{props.message}</button>) : (
            <button onClick={startGame} className='Button'>Clicked start {count} times</button>)}
        </div>
      );
}



export default Button;