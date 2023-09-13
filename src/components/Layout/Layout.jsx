import { useState } from "react";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";
import "./Layout.css";

const Layout = () => {
  const [selectedCard, setSelectedCard] = useState([]);
  const [cost, setCost] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const handleSelect = (card) => {
    let count = card.salary;
    const isExist = selectedCard.find((item) => item.id === card.id);
    if (isExist) {
      return alert("Already Selected");
    }

    selectedCard.forEach((actor) => {
      count = count + actor.salary;
    });
    const remaining = 50000 - count;
    if (count > 50000) {
      return alert("Out of Budget");
    }
    setRemainingBudget(remaining);
    setCost(count);
    setSelectedCard([...selectedCard, card]);
  };
  return (
    <div>
      <div className="title-container">
      <h1 className="title">Crete you own <span className="span">ma<span className="span-r">r</span>vel</span> crew</h1>
      <h2>Total Budget: 50,000 $</h2>
      </div>
      <div className="container">
        <div className="cards-container">
          <Cards handleSelect={handleSelect} />
        </div>
        <div className="cart">
          <Cart
            selectedCard={selectedCard}
            cost={cost}
            remaining={remainingBudget}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
