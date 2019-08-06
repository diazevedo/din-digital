import React from 'react'
import Button from '../Button'

import './styles.css'

const TextBox = ({ title, text, buttonText, className, children,  }) => (
  <div className={`text-box ${className}`}>
    <h2 className="title-box">{ title }</h2>
    <p className="paragraph-box">{ text }</p>
    { children }
    <Button content={buttonText} className=""/>
  </div>
)

export default TextBox