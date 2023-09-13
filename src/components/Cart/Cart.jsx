import PropTypes from 'prop-types'
import './Cart.css'
const Cart = ({selectedCard, cost}) => {
// console.log(cost)
  return (

    <div className='cart-container'>
      <h2>Total Cost: {cost}</h2>
      <h2>Remaining Budget:</h2>
      <h2>Selected Crew</h2>
      <div >

        {
          selectedCard.map(card => <div key={card.id}>
            <h3>{card.name}</h3>
          </div>)
        }
      </div>
    </div>
  )
}

Cart.propTypes = {
  selectedCard: PropTypes.array.isRequired,
  cost: PropTypes.number.isRequired
}

export default Cart
