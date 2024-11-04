import "../styles/main.scss";
import ProfilePic from "../img/Profile-Pic.jpg"

const Accounts = () => {
  return (
    <div className="accounts">
      <div className="profile">
        <img className="profile__pic" src={ProfilePic} alt="Profile Picture" />
        <div className="profile__detail">
          <h3 className="profile__detail--title">QuantumSpectre55</h3>
          <p className="profile__detail--text">quantums@gmail.com</p>
        </div>
      </div>
      <h2 className="accounts__title">Friends online</h2>
      <div className="friends">
        <img className="friends__pic" src={ProfilePic} alt="Profile Pic 1" />
        <div className="friends__detail">
          <h3 className="friends__detail--name">CrismonTiger67</h3>
          <p className="friends__detail--text">Join</p>
          <a className="friends__detail--link" href="#">Resident Evil 4</a>
        </div>
      </div>
      <div className="friends">
        <img className="friends__pic" src={ProfilePic} alt="Profile Pic 1" />
        <div className="friends__detail">
          <h3 className="friends__detail--name">st3alth_sniper</h3>
          <p className="friends__detail--text">Playing</p>
          <a className="friends__detail--link" href="#">Fortnite</a>
        </div>
      </div>
      <div className="friends">
        <img className="friends__pic" src={ProfilePic} alt="Profile Pic 1" />
        <div className="friends__detail">
          <h3 className="friends__detail--name">IceDragon</h3>
          <p className="friends__detail--text">Playing</p>
          <a className="friends__detail--link" href="#">ROBLOX</a>
        </div>
      </div>
      <div className="friends">
        <img className="friends__pic" src={ProfilePic} alt="Profile Pic 1" />
        <div className="friends__detail">
          <h3 className="friends__detail--name">Blitzkrieg66</h3>
          <p className="friends__detail--text">Join</p>
          <a className="friends__detail--link" href="#">Ea Sports FC 24</a>
        </div>
      </div>
      <div className="friends">
        <img className="friends__pic" src={ProfilePic} alt="Profile Pic 1" />
        <div className="friends__detail">
          <h3 className="friends__detail--name">Phoenix_rising</h3>
          <p className="friends__detail--text">playing</p>
          <a className="friends__detail--link" href="#">Rocket League</a>
        </div>
      </div>
    </div>
  )
}

export default Accounts