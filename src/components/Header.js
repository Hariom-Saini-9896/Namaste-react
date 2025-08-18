import { useState } from "react";
import { LOGO_URL } from "../constants";


const loggedInUser = () => {
  // API call to check loggedIn or loggedOut

  return false
}


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

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
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