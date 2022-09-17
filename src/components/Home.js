const Home = (props) => {
  const { maps } = props
  console.log(maps)
  return (
    <div className="levels-container">
      <div className="level">
        <p>Easy</p>
        {maps.length ? (
          <img src={maps[0].url} alt="" className="level-select" />
        ) : null}
      </div>
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
  )
}

export default Home
