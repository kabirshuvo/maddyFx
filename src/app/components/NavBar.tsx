import Link from 'next/link'
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

const NavBar = () => {
  return (
    <nav className='container flex items-center justify-between'>
              <ul className='flex gap-7'>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/about'>About</Link>
                </li>
                <li>
                  <Link href='/designs'>Designs</Link>
                </li>
                <li>
                  <Link href='/offers'>Offers</Link>
                </li>
                <li>
                  <Link href='/services'>Services</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
               
              </ul>
              <ThemeSwitcher />
            </nav>
  )
}

export default NavBar