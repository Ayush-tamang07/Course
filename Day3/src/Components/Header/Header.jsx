import React from 'react'
import './Header.css'
import ButtonType from '../Button/ButtonType'

export default function Header() {
  return (
    <>
        <header>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                </ul>
                <div className='two-btn'>
                    <ButtonType />
                </div>
            </nav>
        </header>
    </>
  )
}
