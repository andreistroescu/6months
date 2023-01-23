import '../App.css';
import React from 'react';

interface Card {
  title: string;
}

const Card = (props: Card) => {
  return (
    <div className="App">
        <header className="App-header">
        <p>{props.title}</p>
        </header>
    </div>
  );
}

export default Card;
