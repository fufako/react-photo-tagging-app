import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <Link to="/" className="header-title">
          <h1>Where's Patrick?</h1>
        </Link>
      </div>

      <div className="about-container">
        <Link to="/about" className="header-about">
          About
        </Link>
      </div>
    </div>
  )
}
export default Header
