import React from 'react'
import './styles.css'

const Button = ({content= "search", className= ""}) => (
  <button className={`button-default ${className}`}>{content}</button>
)

export default Button