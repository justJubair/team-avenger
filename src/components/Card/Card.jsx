
import PropTypes from 'prop-types'
import './Card.css'
const Card = ({card}) => {
    const {name, image, role, salary, age, country} = card
  return (
    <div className='card'>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <div className='text-center'>
      <p>Role: {role}</p>
      <p className='salary'>Salary: {salary} $</p>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      </div>
      <button className='card-btn'>Select</button>
    </div>
  )
}

Card.propTypes = {
card: PropTypes.object.isRequired
}

export default Card
