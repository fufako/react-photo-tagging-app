import { Link } from "react-router-dom"
const Popup = (props) => {
  console.log("popup")
  const { time } = props
  return (
    <div className="popup">
      <div className="popup-info">
        <p>Congrats you found Patrick!</p>
        <p>{time}</p>
        <p>
          Checkout different levels or how did you do compared to diffrent
          players!
        </p>
        <Link to="/" className="back-to-levels">
          <button>Levels</button>
        </Link>
      </div>
    </div>
  )
}
export default Popup
