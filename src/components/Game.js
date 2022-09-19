import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import Popup from "./Popup"
import Timer from "./Timer"

function Game(props) {
  const { maps } = props
  const { state } = useLocation()
  const [gameOver, setGameOver] = useState(false)
  const [time, setTime] = useState()
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
    const count = document.querySelector(".timer").textContent

    const { xCoord, yCoord } = maps?.[level]
    if (inRange(userCoords.x, userCoords.y, xCoord, yCoord)) {
      console.log(count)
      setTime(count)
      setGameOver(true)
    }

    console.log("User coords: " + userCoords.x + " " + userCoords.y)
    console.log("Correct coords" + xCoord + " " + yCoord)
  }
  useEffect(() => {
    if (gameOver) {
      console.log("Gameover")
    }
  }, [gameOver])
  return (
    <>
      <div className="game">
        {gameOver ? <Popup time={time} /> : null}
        <div className="timer">
          <Timer isGameOver={gameOver}></Timer>
        </div>

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
