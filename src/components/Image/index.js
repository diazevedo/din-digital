import React from 'react'
import './styles.css'

const Image = ({ src, alt, className= "" }) => (
  <img src={src} alt={alt} className={className}/>
)

export default Image