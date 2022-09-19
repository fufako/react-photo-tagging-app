import Patrick from "./images/patrick.png"
const About = () => {
  return (
    <div className="about">
      <div className="about-text-container">
        <div className="about-text">
          The pourpse of this game is to find Patrick. Each map contains one
          Patrick. This is how Patrick looks like 👉🏻
        </div>
        <img src={Patrick} alt="patrick" />
      </div>
      <h3 className="author">
        created by{" "}
        <a href="https://github.com/fufako" className="fufako">
          fufako
        </a>{" "}
      </h3>
      <h3 className="author">
        maps by{" "}
        <a href="https://www.reddit.com/r/wherespatrick/" className="fufako">
          Where's Patrick?
        </a>{" "}
      </h3>
    </div>
  )
}
export default About
