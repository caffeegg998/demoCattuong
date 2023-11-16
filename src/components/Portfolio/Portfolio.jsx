import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Loiich1 from "../../img/Loiich1.png";
import Loiich2 from "../../img/Loiich2.png";
import Loiich3 from "../../img/Loiich3.png";
import HOC from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span className={'Rowdies'} style={{color: darkMode?'white': ''}}>LỢI ÍCH VƯỢT TRỘI</span>
      <span className={'custom-class'} style={{color: darkMode?'white': '',marginTop: '15px',fontSize:'30px'}}>Sản phẩm công nghệ JEPTAGS đem lại</span>

      {/* slider */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Loiich1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Loiich2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Loiich3} alt="" />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Portfolio;
