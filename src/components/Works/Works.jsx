import React, { useContext } from "react";
import "./Works.css";
import Mobile from "../../img/Mobile.png";
import Fiverr from "../../img/fiverr.png";
import Jeptags from "../../img/Jeptagslogo.png";
import Satelite from "../../img/Satelite.png";
import Cloud from "../../img/cloud.jpg";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span className={"Rowdies"} style={{ color: darkMode ? "white" : "", fontSize: '40px' }}>
            GIỚI THIỆU CÔNG NGHỆ CHỐNG GIẢ JEPSTAG
          </span>
          <span className={"custom-class"} style={{ color: darkMode ? "white" : "", fontSize: '30px',  marginTop:'20px'}}>
            JEPSTAG - Công nghệ chống giả hàng đầu Thế giới.</span>
          <spane className={"custom-class"} style={{ color: darkMode ? "white" : "", fontSize: '15px',  marginTop:'20px'}}>
            JEPSTAG là giải pháp chống hàng giả cung cấp các chương trình bảo về thươn hiệu hàng
            <br />
            đầu trên thị trường, giải pháp chống hàng giả trên ứng dụng di động và hệ thống bảo mật
            <br />
            tài liệu cho doanh nghiệp và người tiêu dùng. Với công nghệ chip thông minh, sử dụng
            <br />
            cloud, vệ tinh và định vị GPS trên sản phẩm đảm bảo chống giả tuyệt đối.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
          style={{background: 'linear-gradient(to bottom, #ffffff, #ff99cc, #ffffff)'}}
        >
          <div className="w-secCircle">
            <img src={Mobile} alt="" style={{ width: '800px', height: '200px',borderRadius: '23px',boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)'}}/>
          </div>
          <div className="w-secCircle">
            <img src={Satelite} alt=""  style={{ width: '250px', height: '200px',borderRadius: '200px',boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)'}}/>
          </div>
          <div className="w-secCircle" style={{background: 'linear-gradient(120deg, rgba(2,0,36,1) 0%, rgba(118,9,121,1) 35%, rgba(0,212,255,1) 100%)'}}>
            <img src={Jeptags} alt="" style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(118,9,121,1) 35%, rgba(0,212,255,1) 100%)',borderRadius: '50px', width: '450px', height: '120px',boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)'}}/>
          </div>{" "}
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Cloud} alt="" style={{ width: '250px', height: '200px',borderRadius: '200px',boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)'}}/>

          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
