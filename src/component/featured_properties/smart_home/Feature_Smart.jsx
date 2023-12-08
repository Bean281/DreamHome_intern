import React from "react";
import "./Feature_Smart.scss";
import Card from "../card/Card";

const Feature_Smart = () => {
  return (
    <div className="smarts-container">
      {[0, 1, 2, 3, 4, 5].map((item, index) => {
        return <Card />;
      })}
    </div>
  );
};

export default Feature_Smart;
