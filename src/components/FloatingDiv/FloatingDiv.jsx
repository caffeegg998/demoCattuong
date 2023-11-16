import React, {useContext} from "react";

import './FloatingDiv.css'
import "../../fonts/fonts.css"
import {themeContext} from "../../Context";


const FloatinDiv = ({img, text1, text2}) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={img} alt="" />
      <p className={"custom-class"} style={{ color: darkMode ? "black" : "", fontSize: '20px' }}>
        {text1}
        <br/>
        {text2}
      </p >
    </div>
  );
};

export default FloatinDiv;
