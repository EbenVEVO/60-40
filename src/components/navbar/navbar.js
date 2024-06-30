import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'

function navbar() {
  return (
    <>
      <nav className='navbar'> 
        <div className='navcontainer'>
          <a href = "#" className='logo'> 60 % 40 </a>
          <ul className='nav_menu'>
            <li>New Match</li>
            <li>Previous Matches</li>
          </ul>
        </div>
      </nav>


    </>
  )
}

export default navbar