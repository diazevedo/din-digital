import React from  'react'
import './styles.css'

const Menu = ({ menus }) => {

  return (
    <nav className="menu-wrapper">
      <ul className="menu-list">
      {
        menus.map( ( { id, text, active, href } ) => 
          <li key={id} className='menu-items'>
            <a 
              className={`menu-item ${active ? `-active` : `` }`}
              href={href}>
              { text }
            </a>
          </li>
        )
      }
      </ul>
    </nav>
  )

}

export default Menu