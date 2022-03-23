import React, { useState } from "react";
import { data } from "./data";
import classes from "./Cards.module.css";

const Cards = () => {
  const [cards, setCards] = useState(data);
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow((prev) => !prev);
  };

  return (
    <div className={classes.main}>
      {cards.map((card) => {
        return (
          <div key={card.id} className={classes.cards}>
            <h2>{card.question}</h2>
            {show && <p>{card.answer}</p>}
            <button onClick={handleClick}>
              {show ? <p>Close</p> : <p>Show</p>}
            </button>
            <button>Next</button>
          </div>
        );
      })}

      <h3 className={classes.complete}>8/10 Completed</h3>
    </div>
  );
};

export default Cards;
