import React from "react";
import Button from "../Button/Button";

export default function ContactForm() {
  return (
    <div>
      <div className="form-box">
        <div>
          <h3 className="hd-drop">Drop Us a Line </h3>
          <p className="para-drop">
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum
          </p>
          <div>
            <Button text="CONTACT US" />
          </div>
        </div>
        <div>
          <h3 className="hd-drop">Our Newsletter</h3>
          <p className="para-drop">including versions of Lorem Ipsum</p>
          <div>
            <form>
              <input className="input"placeholder="First Name" />
              <input  className="input"placeholder="Last Name" />
              <input  className="input" placeholder="Email" />
              
            </form>
            <button className="sub-btn">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}
