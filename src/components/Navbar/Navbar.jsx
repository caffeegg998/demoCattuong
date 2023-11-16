import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import "../../fonts/fonts.css"
import LogoCatTuong from "../../img/logo.png";
import { Link } from "react-scroll";
import Github from "../../img/github.png";
const navbar = () => {
  return (
    <div className="n-wrapper"
         id="Navbar"
         style={{ background: 'linear-gradient(to right, #ff6b6b, #0072ff)' ,
           borderRadius: '20px'
           ,paddingTop: '10px',paddingBottom: '10px'}}
    >
      {/* left */}
      <div className="n-left" style={{ marginLeft: '20px' }}>
        <img src={LogoCatTuong} alt="" style={{ width: '100px', height: '100px' }}/>
        <div className="custom-class" style={{  color: 'white' ,fontSize: '20px'}} >CÔNG TY CỔ PHẦN CÁT TƯỜNG ONE GROUP</div>




      </div>
      {/* right */}
      <div className="n-right" style={{ marginRight: '20px' }}>
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link className="custom-class" activeClass="active" to="Navbar" spy={true} smooth={true}>
                Trang chủ
              </Link>
            </li>
            <li>
              <Link className="custom-class" to="services" spy={true} smooth={true}>
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link className="custom-class" to="works" spy={true} smooth={true}>
                Sản phẩm
              </Link>
            </li>
            <li>
              <Link className="custom-class" to="portfolio" spy={true} smooth={true}>
                Ứng dụng
              </Link>
            </li>
            <li>
              <Link className="custom-class" to="testimonial" spy={true} smooth={true}>
                Nền tảng
              </Link>
            </li>

          </ul>
        </div>
        <Toggle  />
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button custom-class">Liên Hệ</button>
        </Link>

      </div>
    </div>
  );
};

export default navbar;
