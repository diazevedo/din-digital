import React from 'react'
import Social from '../Social'

import './styles.css'

const Header = ({ images }) => {
  
  return (
    <header className="header">
      <Social images={ images } />
    </header>
  )

}

export default Header