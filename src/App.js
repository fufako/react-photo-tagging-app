import { useState, useEffect } from "react"
import { db } from "./firebase-config"
import { collection, getDocs } from "firebase/firestore"
import Game from "./components/Game"

function App() {
  const [maps, setMaps] = useState([])
  const mapsCollectionRef = collection(db, "maps")

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

  return <Game maps={maps} />
}

export default App
