
import PropTypes from 'prop-types'

const Card = ({card}) => {
    const {name, image, role, salary, age, country} = card
  return (
    <div>
      <h3>{name}</h3>
    </div>
  )
}

Card.propTypes = {
card: PropTypes.object.isRequired
}

export default Card
