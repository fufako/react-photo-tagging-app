import { Link } from "react-router-dom"
import Patrick from "./images/patrick.png"
const Header = () => {
  return (
    <div className="header">
      <img src={Patrick} alt="Patrick" className="patrick" />

      <Link to="/" className="header-title">
        <h1>Where's Patrick?</h1>
      </Link>
    </div>
  )
}
export default Header
