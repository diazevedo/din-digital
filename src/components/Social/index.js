import React from 'react'
import LinkLogo from '../LinkLogo'

import './styles.css'

const Social = ({ images }) => (
  <div className="social-links">
    {
      images.map(({id, href, src, alt}) => 
        <LinkLogo
          id={id}
          href={href}
          src={src}
          alt={alt}
        />
      )
    }
  </div>
)

export default Social