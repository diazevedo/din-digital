import React from 'react'
import './styles.css'

const Bullet = ({ href = '#', content = '', isActive = false, onClick }) => (
  <a 
    href={href} 
    className={`bullet ${isActive ? `-active` : ``}`}
    onClick={onClick}
  >
    { content }
  </a>
)

export default Bullet