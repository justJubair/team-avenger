import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Cards.css";
import  PropTypes  from "prop-types";
const Cards = ({ handleSelect }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("data.json");
        const data = await res.json();
        setCards(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);
  return (
    <div className="cards-container">
      {cards.map((card) => (
        <Card key={card.id} handleSelect={handleSelect} card={card} />
      ))}
    </div>
  );
};

Cards.propTypes = {
  handleSelect: PropTypes.func.isRequired
};

export default Cards;
