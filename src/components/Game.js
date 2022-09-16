import { useState, useEffect } from "react"
import { db } from "../firebase-config"
import { collection, getDocs } from "firebase/firestore"
import Map from "../map1.jpg"
function Game() {
  const [maps, setMaps] = useState([])
  const mapsCollectionRef = collection(db, "maps")

  const getCoords = (e) => {
    let currentTargetRect = e.currentTarget.getBoundingClientRect()
    const event_offsetX = e.pageX - currentTargetRect.left
    const event_offsetY = e.pageY - currentTargetRect.top

    console.log(event_offsetX)
    console.log(event_offsetY)
  }
  useEffect(() => {
    const getMap = async () => {
      const data = await getDocs(mapsCollectionRef)
      setMaps(
        data.docs.map((doc) => ({
          ...doc.data(),
        }))
      )
    }

    getMap()
  }, [])

  const checkCoords = (xUser, yUser) => {
    const xCoords = maps[0].xCoord
    const yCoords = maps[0].yCoord
    console.log(xCoords)
    console.log(yCoords)
  }

  return (
    <div className="game">
      <img
        src={Map}
        alt=""
        onClick={(e) => {
          getCoords(e)
        }}
      />
      <button
        onClick={() => {
          checkCoords(100, 100)
        }}
      ></button>
    </div>
  )
}

export default Game
