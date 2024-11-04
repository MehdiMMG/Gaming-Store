import "../styles/main.scss";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import FC24 from '../img/Fc24-Cover.jpg';
import RE4 from '../img/RE4-Remake-Cover.jpeg';
import SpiderMan from '../img/Marvels-Spider-Man-2.jpg';
import HogwartsLegacy from "../img/Hogwarts-Legacy.jpg"

const Slider = () => {
  return (
    <div className="slider">
      <h2 className="slider__heading">Actual games</h2>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      loop= "true"
    >
      <SwiperSlide className="slider__slide" >
        <img className="slider__pic" src={FC24} alt="Mortal Kombat 1" />
        <span className="slider__pic--text">59.99$</span>
      </SwiperSlide >
      <SwiperSlide className="slider__slide">
        <img className="slider__pic" src={RE4} alt="Resident Evil 4 Remake" />
        <span className="slider__pic--text">59.99$</span>
      </SwiperSlide>
      <SwiperSlide className="slider__slide">
        <img className="slider__pic" src={SpiderMan} alt="Elden Ring" />
        <span className="slider__pic--text">59.99$</span>
      </SwiperSlide>
      <SwiperSlide className="slider__slide">
        <img className="slider__pic" src={HogwartsLegacy} alt="Elden Ring" />
        <span className="slider__pic--text">59.99$</span>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Slider