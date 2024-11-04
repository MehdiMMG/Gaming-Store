import "../styles/main.scss"
import RE4 from "../img/RE4-Remake-Cover.jpeg"
import EldenRing from "../img/Elden-Ring.jpg"
import Hogwarts from "../img/Hogwarts-Legacy.jpg"
import { AiFillHome } from "react-icons/ai";


const RecentlyPlayed = () => {
  return (
    <div className="games-played">
      <div className="title">
        <h2 className="title__text">Recently played</h2>
        <AiFillHome className="title__logo"></AiFillHome>
      </div>
      <div className="detail">
        <img className="picture" src={RE4} alt="Resident Evil 4" />
        <div className="games">
          <span className="games__title">Resident Evil 4</span>
          <p className="precent">72%</p>
          <div className="minutes">
            <span className="minutes__per--1">
            </span>
          </div>
        </div>
      </div>
      <div className="detail">
        <img className="picture" src={EldenRing} alt="Elden Ring" />
        <div className="games">
          <span className="games__title">Elden ring</span>
          <p className="precent">33%</p>
          <div className="minutes">
            <span className="minutes__per--2">
            </span>
          </div>
        </div>
      </div>
      <div className="detail">
        <img className="picture" src={Hogwarts} alt="Hogwarts Legacy" />
        <div className="games">
          <span className="games__title">Hogwarts legacy</span>
          <p className="precent">50%</p>
          <div className="minutes">
            <span className="minutes__per--3">
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentlyPlayed