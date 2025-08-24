import { Outlet } from "react-router"

const About = () => {
  return (
    <div>
      <h1>About Us Page.</h1>
      <p>
        This is the Namaste React Live course Chapter-07 Finding the Path 🚀.
      </p>
        <Outlet/>
    </div>
  )
}

export default About