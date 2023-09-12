import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("data.json");
        const data = await res.json();
        setCards(data)
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);
  return (
    <div>
      {
        cards.map(card=><Card key={card.id} card={card}/>)
      }
    </div>
  );
};

export default Cards;
