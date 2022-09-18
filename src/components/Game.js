import { useLocation } from "react-router-dom"
import Header from "./Header"
import CountUp from "react-countup"

function Game(props) {
  const { maps } = props
  const { state } = useLocation()
  const level = state.level
  console.log(maps[3])

  const getCoords = (e) => {
    e.preventDefault()
    let bounds = e.currentTarget.getBoundingClientRect()
    const event_offsetX = e.clientX - bounds.left
    const event_offsetY = e.clientY - bounds.top

    const userCoords = { x: event_offsetX, y: event_offsetY }

    return userCoords
  }

  const checkCoords = (e) => {
    const userCoords = getCoords(e)

    const { xCoord, yCoord } = maps?.[level]

    console.log("User coords: " + userCoords.x + " " + userCoords.y)
    console.log("Correct coords" + xCoord + " " + yCoord)
  }

  return (
    <>
      <div className="game">
        <CountUp end={1000} duration={1000} />
        <div className="img-container">
          {maps.length ? (
            <img
              className="game-img"
              src={maps[level].url}
              alt="map1"
              onClick={(e) => {
                checkCoords(e)
              }}
            />
          ) : null}
        </div>
      </div>
    </>
  )
}

export default Game
