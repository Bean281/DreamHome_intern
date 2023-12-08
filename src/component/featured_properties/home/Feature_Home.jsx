import React from "react";
import "./Feature_Home.scss";
import Card from '../card/Card';

const Feature_Home = () => {
  return(
    <div className="homes-container">
      {[0,1,2,3,4,5,6,7].map((item, index) => {
        return (
          <Card/>
        )
      })}
    </div>
  )
}

export default Feature_Home;