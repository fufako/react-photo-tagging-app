import { Link } from "react-router-dom"
import Game from "./Game"
const Home = (props) => {
  const { maps } = props
  console.log(maps)

  const pickLvl = () => {
    console.log("click")
    return <Game />
  }
  return (
    <>
      <div className="levels-container">
        <Link to="/game" state={{ level: 0 }}>
          <div
            className="level"
            onClick={() => {
              pickLvl()
            }}
          >
            <p>Easy</p>
            {maps.length ? (
              <img src={maps[0].url} alt="" className="level-select" />
            ) : null}
          </div>
        </Link>
        <Link to="/game" state={{ level: 1 }}>
          <div className="level">
            <p>Medium</p>
            {maps.length ? (
              <img src={maps[1].url} alt="" className="level-select" />
            ) : null}
          </div>
        </Link>
        <Link to="/game" state={{ level: 2 }}>
          <div className="level">
            <p>Medium</p>
            {maps.length ? (
              <img src={maps[2].url} alt="" className="level-select" />
            ) : null}
          </div>
        </Link>
        <Link to="/game" state={{ level: 3 }}>
          <div className="level">
            <p>Hard</p>
            {maps.length ? (
              <img src={maps[3].url} alt="" className="level-select" />
            ) : null}
          </div>
        </Link>
      </div>
    </>
  )
}

export default Home
