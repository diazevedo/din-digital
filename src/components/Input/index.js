import React from 'react'
import './styles.css'

const Input = ({ type='text',  placeholder='', className='input-default'}) => (
  <input type={type} placeholder={placeholder} className={className} />
)

export default Input