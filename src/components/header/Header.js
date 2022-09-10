import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <div>
        <div className='navbar'>
            
            <div className='header-list'>
                
                <Link className='link' to='/music'>Music</Link>
                <Link className='link' to='/news'>News</Link>
                <Link style={{textDecoration:'none'}} to='/'><h3 className='web-name'>Michael O. Wilson</h3></Link>
                <Link className='link' to='/video'>Video</Link>
                <Link className='link' to='/contact'>Follow</Link>
                
            </div>
            <div className={isNavExpanded ? "list expanded" : "list"}>
                <Link className='link2' to='/music'>Music</Link>
                <Link className='link2' to='/news'>News</Link>
                <Link className='link2' to='/video'>Video</Link>
                <Link className='link2' to='/contact'>Follow</Link>
            </div>
            
        </div>
        <button className='hamburger' onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
            <svg xmlns='http://www.w3.org/2000svg' className='h-5 w-5' viewBox='0 0 20 20' fill='white'>
                <path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z' clipRule='evenodd' />
            </svg>
        </button>
    </div>
  )
}

export default Header