import Cards from '../Cards/Cards'
import Cart from '../Cart/Cart'
import './Layout.css'
import PropTypes from 'prop-types'

const Layout = () => {
  return (
  
      <div className='container'>
        <div className='cards-container'>
          <Cards/>
        </div>
        <div className='cart'>
          <Cart/>
        </div>
      </div>
    
  )
}

Layout.propTypes = {

}

export default Layout
