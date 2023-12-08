import React from "react";
import "./Feature_Office.scss";
import Card from '../card/Card';

const Feature_Office = () => {
  return(
    <div className="office-container">
      {[0,1,2,3,4,5,6].map((item, index) => {
        return (
          <Card/>
        )
      })}
    </div>
  )
}

export default Feature_Office;