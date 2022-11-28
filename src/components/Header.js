import React from 'react'

function Header() {
  return (
    <div>
        <nav className='nav'>
            <div className='nav-left'>
                <a className='brand' href='public/index.html'>
                    To Do
                </a>
            </div>
            <div className='nav-right'>
                <div className='tabs'>
                    <a href='https://github.com/GNikroo'>
                        Task Management App by Gina Nikroo
                    </a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header