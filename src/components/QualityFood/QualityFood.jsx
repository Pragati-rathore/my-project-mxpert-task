import React from "react";
import "./QualityFood.css";
import Button from "../Button/Button";

export default function QualityFood() {
  return (
    <div>
      <div className="bg-image">
        <div className="overlay">
          <div
            className="text">
            <div>
              <div className="hd-main">
                <h1>Only Quality Food</h1>
              </div>

              <div className="text-main">
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </p>
              </div>
              <div className="btns-top">
                <button className="menu-btn">VIEW MENU</button>
                <Button text="RESERVATION"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
