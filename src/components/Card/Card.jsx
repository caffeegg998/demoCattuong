import React, {useContext} from "react";
import "./Card.css";
import {themeContext} from "../../Context";

const Card = ({emoji, heading, detail, color}) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt=""  style={{height:'120px'}}/>
      <span style={{color: darkMode ? "white" : "",fontFamily:'sans-serif'}}>{heading}</span>
      <span style={{color: darkMode ? "white" : ""}}>{detail}</span>
      <button className="c-button">Xem thêm</button>
    </div>
  );
};

export default Card;
