import React from "react";
import "./Feature_Apartment.scss";
import Card from '../card/Card';

const Feature_Apartment = () => {
  return(
    <div className="office-container">
      {[0,1,2,3].map((item, index) => {
        return (
          <Card/>
        )
      })}
    </div>
  )
}

export default Feature_Apartment;