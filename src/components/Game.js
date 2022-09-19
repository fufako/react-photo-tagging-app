import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "./Header"
import CountUp from "react-countup"

function Game(props) {
  const { maps } = props
  const { state } = useLocation()
  const [gameOver, setGameOver] = useState(false)
  const level = state.level

  const getCoords = (e) => {
    e.preventDefault()
    let bounds = e.currentTarget.getBoundingClientRect()
    const event_offsetX = e.clientX - bounds.left
    const event_offsetY = e.clientY - bounds.top

    const userCoords = { x: event_offsetX, y: event_offsetY }

    return userCoords
  }
  const inRange = (userX, userY, xCoord, yCoord) => {
    return (
      userX >= xCoord - 10 &&
      userX <= xCoord + 10 &&
      userY >= yCoord - 20 &&
      userY <= yCoord + 20
    )
  }
  const checkCoords = (e) => {
    const userCoords = getCoords(e)

    const { xCoord, yCoord } = maps?.[level]
    if (inRange(userCoords.x, userCoords.y, xCoord, yCoord)) {
      setGameOver(true)
    }

    console.log("User coords: " + userCoords.x + " " + userCoords.y)
    console.log("Correct coords" + xCoord + " " + yCoord)
  }
  useEffect(() => {
    if (gameOver === true) console.log("Gameover")
  }, [gameOver])
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
