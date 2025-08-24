import { useState } from 'react'

const Profile = () => {
  const [count, setCount] = useState(0)
  return(
    <div>
      <h2>Profile Component and its nested inside About Page.</h2>
      <h3>And its a Functional Component.</h3>
      <h3>Count: {count}</h3>
      <button onClick={ () => setCount(1)}> Count </button>
    </div>
  )
}

export default Profile;