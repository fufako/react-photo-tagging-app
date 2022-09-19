import { Link } from "react-router-dom"
const Popup = (props) => {
  console.log("popup")
  const { time } = props
  return (
    <div className="popup">
      <div className="popup-info">
        <p className="popup-top">
          Congrats you found <span className="popup-purple">Patrick!</span>
        </p>
        <p>
          Your time was: <span className="popup-purple">{time}</span>{" "}
        </p>
        <br />
        <p>
          Checkout different levels <span className="popup-purple">below</span>
        </p>
        <Link to="/react-photo-tagging-app" className="back-to-levels">
          <button>Levels</button>
        </Link>
      </div>
    </div>
  )
}
export default Popup
