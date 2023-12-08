import React from "react";
import "./Feature_Villa.scss";
import Card from '../card/Card';

const Feature_Villa = () => {
  return(
    <div className="homes-container">
      {[0,1,2].map((item, index) => {
        return (
          <Card/>
        )
      })}
    </div>
  )
}

export default Feature_Villa;