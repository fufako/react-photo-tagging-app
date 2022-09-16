import { useState, useEffect } from "react"
import { db } from "../firebase-config"
import { collection, getDocs } from "firebase/firestore"
function Game() {
  const [maps, setMaps] = useState([])
  const mapsCollectionRef = collection(db, "maps")

  useEffect(() => {
    const getMap = async () => {
      const data = await getDocs(mapsCollectionRef)
      setMaps(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getMap()
    console.log(maps)
  }, [])

  return (
    <div className="game">
      <img src={maps[0].url} alt="" />
    </div>
  )
}

export default Game
