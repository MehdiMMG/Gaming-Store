import "../styles/main.scss";
import { RiAliensFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { TbCategory } from "react-icons/tb";
import { FaBookBookmark } from "react-icons/fa6";
import { HiOutlineHashtag } from "react-icons/hi";
import { FaUserFriends } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLiveHelp } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='pic'>
        <RiAliensFill className='pic__logo'></RiAliensFill>
        <span className='pic__heading-1 pic__heading'>Game</span>
        <span className='pic__heading-2 pic__heading'>Verse</span>
      </div>
      <div className='sidebar__items'>
        <ul className='nav'>
          <li className='nav__list'>
            <a href='#' className='nav__link'>
              <AiFillHome className='nav__logo'></AiFillHome>
              <span>Home</span>
            </a>
          </li>
          <li className='nav__list'>
            <a href='#' className='nav__link'>
              <TbCategory className='nav__logo'></TbCategory>
              <span>Category</span>
            </a>
          </li>
          <li className='nav__list'>
            <a href='#' className='nav__link'>
              <FaBookBookmark className='nav__logo'></FaBookBookmark>
              <span>Library</span>
            </a>
          </li>
          <li className='nav__list'>
            <a href='#' className='nav__link'>
              <HiOutlineHashtag className='nav__logo'></HiOutlineHashtag>
              <span>Community</span>
            </a>
          </li>
          <li className='nav__list'>
            <a href='#' className='nav__link'>
              <FaUserFriends className='nav__logo'></FaUserFriends>
              <span>Freinds</span>
            </a>
          </li>
          <li className='nav__list'>
            <a href='#' className='nav__link'>
              <FaRegHeart className='nav__logo'></FaRegHeart>
              <span>Wishlist</span>
            </a>
          </li>
          <li className='nav__list'>
            <a href='#' className='nav__link'>
              <GoDownload className='nav__logo'></GoDownload>
              <span>Downloads</span>
            </a>
          </li>
        </ul>
      </div>
      <div className='sidebar__bottom'>
        <ul className='nav'>
          <li className='nav__list'>
            <a href='#' className='nav__link'>
              <IoSettingsOutline></IoSettingsOutline>
              <span>Setting</span>
            </a>
          </li>
          <li className='nav__list'>
            <a href='#' className='nav__link'>
              <MdLiveHelp></MdLiveHelp>
              <span>help</span>
            </a>
          </li>
        </ul>
      </div>
      <div className='discount'>
        <h2 className='discount__heading'>50% discount</h2>
        <p className='discount__paragraph'>on the games in the selection</p>
        <button className='discount__btn'>Got to library</button>
      </div>
    </div>
  );
};

export default Sidebar;
