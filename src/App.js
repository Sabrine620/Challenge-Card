import "./styles.css";
import { useState } from "react";

const Cards = [
  {
    id: 3457,
    question: "What language is React Based on ?",
    answer: "javascript",
  },
  {
    id: 7336,
    question: "What are the building blocks of react apps ?",
    answer: "Components",
  },
  {
    id: 8832,
    question:
      "What's the name of the syntaxe we use to describe a ui in React ?",
    answer: "JSX",
  },

  {
    id: 1297,
    question: "How to pass data from parent to child components ?",
    answer: "Props",
  },

  {
    id: 9103,
    question: "How to give components memory ?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completly synchronised with state ?",
    answer: "Controlled element",
  },
];

export default function App() {
  // const [selectCard, setSelectCard] = useState(false);
  return (
    <div className="Card-container">
      {Cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

function Card({ card }) {
  const [selectCard, setSelectCard] = useState(false);
  // const isSelected = selectCard === card.id;
  // function handelClick() {
  //   setSelectCard(card.id);
  // }

  return (
    <div
      className={`Card-info ${selectCard ? "selectCard" : " "}`}
      onClick={() => setSelectCard(!selectCard)}
      // onClick={handelClick}
    >
      {selectCard ? card.answer : card.question}
    </div>
  );
}
