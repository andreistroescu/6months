import '../App.css';
import React from 'react';
import ReactDOM from "react-dom";

const Card = (props) => {
  return (
    <div className="App">
        <header className="App-header">
        <p>{props.title}</p>
        </header>
    </div>
  );
}

export default Card;
