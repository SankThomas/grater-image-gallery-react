import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo512.png'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-1 px-3 bg-yellow-500">
      <div className="logo">
        <Link to="/">
          <img className="w-16" src={logo} alt="grater gallery" />
        </Link>
      </div>

      <nav>
        <ul className="flex">
          <li className="mr-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-3">
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="sign-up">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
