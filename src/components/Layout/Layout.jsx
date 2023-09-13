import { useState } from 'react'
import Cards from '../Cards/Cards'
import Cart from '../Cart/Cart'
import './Layout.css'

const Layout = () => {
  const [selectedCard, setSelectedCard] = useState([]);
  const [cost, setCost] = useState(0);
  const handleSelect = (card)=>{
    let count = card.salary;
    const isExist = selectedCard.find(item=>item.id === card.id);
    if(isExist){
      return alert('Already Selected')
    } 

      selectedCard.forEach(actor=>{
        count = count + actor.salary
      })
      setCost(count);
      setSelectedCard([...selectedCard, card])
    
  }
  return (
  
      <div className='container'>
        <div className='cards-container'>
          <Cards handleSelect={handleSelect} />
        </div>
        <div className='cart'>
          <Cart selectedCard={selectedCard} cost={cost}/>
        </div>
      </div>
    
  )
}



export default Layout
