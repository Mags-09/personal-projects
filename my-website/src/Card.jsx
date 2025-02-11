import React from 'react';
import { useState, useEffect } from 'react';
// import Select from 'react-select';
import './Card.css';

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="card-container">
      <div className={`card ${isOpen ? 'open' : ''}`}>
        <div className="card-front">
          <h1>Happy Two Years!!</h1>
          <button onClick={handleOpen}>Open Card</button>
        </div>
        <div className="card-inside-left">
          <p>Happy Anniversary! 💖</p>
        </div>
        <div className="card-inside-right">
          <p>Here's to many more wonderful years together!</p>
        </div>
      </div>
    </div>
  );
};

export default Card;