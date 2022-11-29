import React from 'react'
import DropdownButton from './Dropdown'

function Header() {
  return (
    <div>
        <nav className='navbar mx-3'>
            <div>
                <a className='navbar-brand' href='public/index.html'>
                    To Do
                </a>
            </div>
            <div>
                <DropdownButton/>
            </div>
        </nav>
    </div>
  )
}

export default Header