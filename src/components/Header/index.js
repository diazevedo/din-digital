import React from 'react'
import Social from '../Social'
import Input from '../Input'
import Button from '../Button'
import Form from '../Form'
import Image from '../Image'
import Figure from '../Figure'

import Logo from '../../images/freshness.png'
import LogoText from "../../images/free-psd-website-tem.png"

import './styles.css'

const Header = ({ images }) => {
  
  return (
    <header className="header">
      
      <Social images={ images } />
      
      <Form>
        <Input placeholder="search our website..." />
        <Button content="search" />
      </Form>
      <Figure>
        <Image src={Logo} alt="Logo Freshness" className="img-log"/>
        <Image src={LogoText} alt="Logo Freshness" className="img-log"/>
      </Figure>
      
      <Form>
        <Input placeholder="search our website..." />
        <Button content="search" />
      </Form>

    </header>
    
  )

}

export default Header