import React from 'react'
import Social from '../Social'
import Input from '../Input'
import Button from '../Button'
import Form from "../Form"

import './styles.css'

const Header = ({ images }) => {
  
  return (
    <header className="header">
      
      <Social images={ images } />
      
      <Form>
        <Input placeholder="search our website..." />
        <Button content="search" />
      </Form>
      
      <Social images={ images } />
      
      <Form>
        <Input placeholder="search our website..." />
        <Button content="search" />
      </Form>
      
    </header>
    
  )

}

export default Header