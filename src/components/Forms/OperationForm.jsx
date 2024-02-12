import React from "react";
import Button from "../Button/Button";

export default function OperationForm() {
  return (
    <div>
      <div className="form-box">
        <h3 className="forn-hd">Hours Of Operations</h3>
        <div>
          <p className="days"> MON-FRI</p>
          <ul>
            <li className="time">10:00am-1:00pm</li>
            <li className="time">4:00m-10:00pm</li>
          </ul>
          <div className="barder">
          <p className="days">SAT</p>
          <ul>
            <li className="time">10:00am-1:00pm</li>
          </ul>
          </div>
          <p className="days">SUN</p>
          <ul>
            <li className="time">10:00am-1:00pm</li>
          </ul>
        </div>
        <div>
            <Button text="MAKE A RESERVATION"/>
        </div>
      </div>
    </div>
  );
}
