import React from 'react'
import Figure from '../Figure'
import Image from '../Image'
import TextBox from '../TextBox'

import './styles.css'

const Card = ({ src, alt, title, text, buttonText, className = '', classNameFigure = '', cardClassName = ''}) => (
  <article className={`card-default ${cardClassName}`}>
    <Figure className={classNameFigure}>
      <Image src={src} alt={alt} className={className}/>
    </Figure>
    <TextBox 
      title={title}
      text={text}
      buttonText={buttonText}
    />
  </article>
)

export default Card

