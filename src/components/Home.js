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
        <Link to="/game">
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
        <div className="level">
          <p>Medium</p>
          {maps.length ? (
            <img src={maps[1].url} alt="" className="level-select" />
          ) : null}
        </div>
        <div className="level">
          <p>Medium</p>
          {maps.length ? (
            <img src={maps[2].url} alt="" className="level-select" />
          ) : null}
        </div>
        <div className="level">
          <p>Hard</p>
          {maps.length ? (
            <img src={maps[3].url} alt="" className="level-select" />
          ) : null}
        </div>
      </div>
    </>
  )
}

export default Home
