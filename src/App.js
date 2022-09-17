import { useState, useEffect } from "react"
import { db } from "./firebase-config"
import { collection, getDocs } from "firebase/firestore"
import Home from "./components/Home"
import Header from "./components/Header"
import Game from "./components/Game"
import { Routes, Route } from "react-router-dom"

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

  return (
    <>
      <div className="main">
        <Header />

        <Routes>
          <Route path="/" element={<Home maps={maps} />} />
          <Route path="/game" element={<Game maps={maps} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
