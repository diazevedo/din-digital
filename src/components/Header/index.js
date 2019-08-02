import React from 'react'
import Social from '../Social'
import Input from '../Input'

import './styles.css'

const Header = ({ images }) => {
  
  return (
    <header className="header">
      <Social images={ images } />
      <Input placeholder="search our website..." />
    </header>
  )

}

export default Header