import React from 'react'

function Header() {
  return (
    <div className='dayanch__header'>
         <div className='dayanch__logo'>
          <p> LOGO </p> 
         </div>
        <nav className='dayanch__nav'>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header