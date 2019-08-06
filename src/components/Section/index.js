import React from 'react'
import './styles.css'

const Section = ({children = '', className = '' }) => (
  <section className={`section-default ${className}`}>
      { children }
  </section>
)

export default Section