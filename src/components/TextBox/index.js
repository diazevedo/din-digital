import React from 'react'
import Button from '../Button'

import './styles.css'

const TextBox = ({ title, text, buttonText }) => (
  <div className="text-box">
    <h2 className="title-box">{ title }</h2>
    <p className="paragraph-box">{ text }</p>
    <Button content={buttonText} className=""/>
  </div>
)

export default TextBox