import React from "react";
import "../home/Feature_Home.scss";
import Card from '../card/Card';

const Feature_Bungalow = () => {
  return(
    <div className="office-container">
      {[0].map((item, index) => {
        return (
          <Card/>
        )
      })}
    </div>
  )
}

export default Feature_Bungalow;