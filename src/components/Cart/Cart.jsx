import PropTypes from "prop-types";
import "./Cart.css";
const Cart = ({ selectedCard, cost, remaining }) => {
  // console.log(cost)
  return (
    <div className="cart-container">
      <h2>Total Cost: {cost} $</h2>
      <h2>Remaining Budget: {remaining} $</h2>
      <h2 className="crew">Selected Crew</h2>
      <div>
        {selectedCard.map((card) => (
          <div key={card.id}>
            <div className="cart">
              <img className="cart-img" src={card.image} alt="" />
              <h3>{card.name}</h3>
            </div>
          </div>
        ))}
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
