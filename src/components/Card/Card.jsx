
import PropTypes from 'prop-types'
import './Card.css'
const Card = ({card, handleSelect}) => {
    const {name, image, role, salary, age, country} = card
  return (
    <div className='card'>
      <img className='img' src={image} alt="" />
      <h3>{name}</h3>
      <div className='text-center'>
      <p>Role: {role}</p>
      <p className='salary'>Salary: {salary} $</p>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      </div>
      <button onClick={()=>handleSelect(card)} className='card-btn'>Select</button>
    </div>
  )
}

Card.propTypes = {
card: PropTypes.object.isRequired,
handleSelect: PropTypes.func.isRequired
}

export default Card
