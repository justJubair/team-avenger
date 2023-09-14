import PropTypes from "prop-types";
import "./Cart.css";
import SelectedActor from "../SelectedActor/SelectedActor";
const Cart = ({ selectedCard, cost, remaining }) => {
  // console.log(cost)
  return (
    <div className="cart-container">
      <h2>Total Cost: <span className="money">{cost.toFixed(2)} $</span></h2>
      <h2>Remaining Budget: <span className="money">{remaining.toFixed(2)} $</span></h2>
      <h2 className="crew">Selected Crew</h2>
      <div>
        {selectedCard.map(card=><SelectedActor key={card.id} card={card}/>)}
      </div>
    </div>
  );
};

Cart.propTypes = {
  selectedCard: PropTypes.array.isRequired,
  cost: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
};

export default Cart;
