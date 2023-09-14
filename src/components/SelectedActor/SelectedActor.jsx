
import PropTypes from 'prop-types'
import './SelectedActor.css'
const SelectedActor = ({card}) => {
  return (
    <div className='main-container'>
      <div className='name-img'>
      <img className='actor-img' src={card.image} alt="" />  
      <h3>{card.name}</h3>
      </div>
      <button className='remove-btn'>Remove</button>
    </div>
  )
}

SelectedActor.propTypes = {
card: PropTypes.object.isRequired
}

export default SelectedActor
