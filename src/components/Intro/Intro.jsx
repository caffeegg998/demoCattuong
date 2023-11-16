import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import jeptags from "../../img/Jeptags.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro" style={{ marginLeft: '20px' }} >
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span className={"Rowdies"} style={{ color: darkMode ? "white" : "", fontSize: '40px' }}>CÔNG TY CỔ PHẦN CÁT TƯỜNG</span>
          <span className={"custom-class"} style={{ color: darkMode ? "white" : "", fontSize: '31px' }}>ĐƠN VỊ HỢP TÁC TOÀN DIỆN</span>
          <span
              className={"custom-class"} style={{ color: darkMode ? "white" : "", fontSize: '20px' }}>
            Phân phối độc quyền khối ASEAN mở rộng sản phẩm công nghệ cao công nghệ chống giả của BESTSKY AMERICA INC
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button" style={{ marginTop:'20px', paddingBottom:'50px',maxWidth:'250px' }}>Liên hệ ngay</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right" style={{ marginRight: '20px' }}>
        {/*<img src={Vector1} alt="" />*/}
        {/*<img src={Vector2} alt="" />*/}
        <img src={jeptags} alt="" style={{ width: '1200px', height: '1200px',top:'-270px', right: '800px'}} />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Lợi ích" text2="vượt trội" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup}  text1="Thông minh" text2="ưu việt" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
