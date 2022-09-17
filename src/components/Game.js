function Game(props) {
  const { maps } = props
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

    const { xCoord, yCoord } = maps?.[0]
    console.log("User coords: " + userCoords.x + " " + userCoords.y)
    console.log("Correct coords" + xCoord + " " + yCoord)
  }

  return (
    <div className="game">
      <div className="img-container">
        {maps.length ? (
          <img
            src={maps[0].url}
            alt="map1"
            onClick={(e) => {
              checkCoords(e)
            }}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Game
