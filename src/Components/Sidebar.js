import React from 'react'
import { useSelector } from 'react-redux'


 const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)


  //Early retun pattern
  if(!isMenuOpen) return null

  return (
    <div className='p-5 shadow-lg w-44'>
       <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>live</li>
                
      </ul>
      <h1 className='pt-5 font-bold'>Subscription</h1>
      <ul>
        <li>Game</li>
        <li>Game</li>
        <li>Game</li>
        <li>Game</li>        
      </ul>
      <h1 className='pt-5 font-bold'>Movies</h1>
      <ul>
        <li>Game</li>
        <li>Game</li>
        <li>Game</li>
        <li>Game</li>        
      </ul>
    </div>
  )
}

export default Sidebar
