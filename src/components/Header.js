import Patrick from "./images/patrick.png"
const Header = () => {
  return (
    <div className="header">
      <img src={Patrick} alt="Patrick" className="patrick" />
      <h1>Where's Patrick?</h1>
    </div>
  )
}
export default Header
