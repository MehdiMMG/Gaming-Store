import "../styles/main.scss"
import { IoIosSearch } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";


const Main = () => {
  return (
    <div className="main">
        <div className="search">
          <form action="#">
            <input className="search__input" type="text"  placeholder="Search"/>
            <button className="search__button">
              <IoIosSearch className="search__logo"></IoIosSearch>
            </button>
          </form>
          <div className="icons">
            <MdEmail className="icons__notif"></MdEmail>
            <CiBellOn className="icons__notif"></CiBellOn>
          </div>
        </div>
        <div className="content">
          <ul className="tags">
            <li className="tags__list"><a href="#" className="tags__link">Fighting</a></li>
            <li className="tags__list"><a href="#" className="tags__link">Brutal</a></li>
            <li className="tags__list"><a href="#" className="tags__link">Action</a></li>
          </ul>
          <div className="details">
            <h2 className="details__title">
              Mortal Kombat 1
            </h2>
            <p className="details__paragraph">
              Mortal Kombat is a Fighting game,
              with a lot of brutal and bloody scenes
              if you want to just crush bones this game is for you,
              with a lot of charecters and kameos you will not
              be bored.
            </p>
          </div>
          <div className="buy">
            <a href="#" className="buy__link">
              <h2 className="buy__link--text">
                Buy now
              </h2>
              <p className="buy__price">
                $24.00
              </p>
              <span className="buy__price--crossed">
                $35.99
              </span>
            </a>
            <FaRegHeart className="buy__like"></FaRegHeart>
          </div>
        </div>
    </div>
  )
}

export default Main