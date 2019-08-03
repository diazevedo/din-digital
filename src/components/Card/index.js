import React from 'react'
import Figure from '../Figure'
import Image from '../Image'
import TextBox from '../TextBox'

import './styles.css'

const Card = ({ src, alt, title, text, buttonText, className = ''}) => (
  <>
    <Figure>
      <Image src={src} alt={alt} className={className}/>
    </Figure>
    <TextBox 
      title={title}
      text={text}
      buttonText={buttonText}
    />
  </>
)

export default Card

