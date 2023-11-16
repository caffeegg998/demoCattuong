import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import "../../fonts/fonts.css";
import sangche from "../../img/sangche.svg";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle custom-class" style={{color: darkMode?'var(--orange)':''}}>9+</div>
        <span className={'custom-class'} style={{color: darkMode?'white':''}}>Năm </span>
        <span className={'custom-class'}>Kinh Nghiệm</span>
      </div>
      <div className="achievement">
        <div className="circle custom-class" style={{color: darkMode?'var(--orange)':''}}>1M+</div>
        <span className={'custom-class'} style={{color: darkMode?'white':''}}>Chuỗi cung ứng </span>
        <span className={'custom-class'}>toàn cầu</span>
      </div>
      <div className="achievement">
        <div className="circle custom-class" style={{color: darkMode?'var(--orange)':''}}>
            <img src={sangche} alt=""  style={{width:'50px',height:'50px'}}/>
        </div>
        <span className={'custom-class'}  style={{color: darkMode?'white':''}}>Đăng ký bảo hộ và sáng chế </span>
        <span className={'custom-class'}> Tại Hoa Kỳ, và Việt Nam.</span>
      </div>
    </div>
  );
};

export default Experience;
