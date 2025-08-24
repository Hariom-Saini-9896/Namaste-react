import { useState } from "react";
import { LOGO_URL } from "../constants";
import { Link } from "react-router-dom";
import useOnline from './utils/useOnline'

// Named Export
export const Title = () => (
  <a href="/">
    <img 
      className="logo" 
      src= {LOGO_URL} 
      alt="logo" 
  />
  </a>
)

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const isOnline = useOnline()

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
      <div>
        {isOnline ? '🟢' : '🔴'}
      </div>
      { isLoggedIn ? (
              <button onClick={ () => setIsLoggedIn(false)}>Logout</button>
          ) : (
              <button  onClick={ () => setIsLoggedIn (true)}>Login</button>
          )}
    </div>
  )
}

// Default export
export default Header;