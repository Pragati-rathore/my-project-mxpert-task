import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Footer.css"

export default function Footer() {
  const footerData = [
    <FaFacebookF />,
    <FaTwitter />,
    <FaFacebookF />,
    <FaTwitter />,
  ];
  return (
    <div style={{backgroundColor:"#000"}}>
<div className="container-main" >
      <div className="footer">
        
        <h3>is simply dummy text of the printing and typesetting</h3>
        <ul className="footer-list">
        {footerData.map((iteme, i) => (
          <li key={i}>{iteme}</li>
        ))}
      </ul>
      </div>
    
    </div>
    </div>
    
  );
}
