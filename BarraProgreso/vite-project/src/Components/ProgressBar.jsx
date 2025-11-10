import React from "react";
import "./styles.css";
const ProgressBar = ({inputWidth}) => {
  return (
    <div>
      <div className="container">
          <div className="innerContainer" style={{ width: `${inputWidth}%`}}>
            {inputWidth}
          </div>
      </div>
    </div> 
  );
};
export default ProgressBar;