import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Bestky from "../../img/Bestsky logo.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';
import LogoCatTuong from "../../img/logo.png";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span className={"Rowdies"} style={{ color: darkMode ? "white" : "", fontSize: '40px' }}>GIỚI THỆU CÔNG TY BESTSKY AMERICA INC</span>
        <span
            className={"custom-class"} style={{ color: darkMode ? "white" : "", fontSize: '20px',marginTop:'15px' }}
          >Bên cạnh lĩnh vực nghiên cứu sản phẩm công nghệ cao (Chip,IoT,AI,...),BestSky
          <br />
           đã liên kết với nhà sản xuất hiện đại tại Thung lũng Silicon để tạo ra sản phẩm
          <br/>
           theo tiêu chuẩn USA và các sản phẩm tại nước ngoài, sản xuất theo tiêu chuẩn
          <br/>
          Mỹ phù hợp với nhu cầu thị trường toàn cầu.
        </span>
        <spane className={"custom-class"} style={{ color: darkMode ? "white" : "", fontSize: '18px',marginTop:'15px' }}>
          Đến nay Bestsky đã nghiên cứu thiết kế và sản xuất nhiều prototype cho nhiều dòng
          <br />
           công nghệ kỹ thuật cao khác nhau để đón đầu xu thế công nghiệp 4.0 trên toàn cầu.
          <br/>

        </spane>
        <img src={Bestky} alt="" style={{ width: '350px', height: '80px' ,marginTop:'20px',marginBottom:'20px'}}/>
        <a href={Resume} download>
          <button className=" s-button ">Download Catalog</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards" >
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"2012"}
            detail={"BestSky American Inc được thành lập tại Santa Clara, thung lũng Silicon, California Hoa Kỳ, với gần 10 năm kinh nghiệm trong lĩnh vực tư vấn chuyển giao công nghệ và lĩnh vực công nghệ cao."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"2016"}
            detail={"BestSky đã đầu tư mở rộng lĩnh vực nghiên cứu R&D về chip, sensor và trí tuệ nhân tạo(AI) trong lĩnh vực chống giả và tự động hóa trong chuỗi cung ứng toàn cầu."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"2017"}
            detail={
              "Công nghệ chống giả của Jeptags ra đời và đã nộp đơn đăng ký bảo hộ Sáng chế và Nhãn hiệu tại Hoa Kỳ và Việt Nam."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
