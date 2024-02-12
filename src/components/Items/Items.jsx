import React from "react";
import Card from "../Card/Card";
import foodImg from "../../assets/food-1.jpg"
import "./Item.css"

export default function Items() {
 
  return (
    <div style={{backgroundColor:"#000"}}>
        <div className="container-main">
            <div className="card-sect">
            <Card />
            </div>
       
        </div>
      
    </div>
  );
}
