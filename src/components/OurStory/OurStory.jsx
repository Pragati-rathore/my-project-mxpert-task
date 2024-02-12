import React from "react";
import Heading from "../Heading/Heading";
import "./OurStory.css";
import vegImg from "../../assets/vegImg.jpg"

export default function OurStory() {
  return (
    <div className="container-main">
      <div className="our-Sty">
        <div className="sect-1">
        <Heading sectionText="Our Story" mainText="Welcome To Royal" />
        <div>
          <p className="sty-para">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        </div>
        <div className="sect-2">
            <div className="veg-img">
            <img src={vegImg} alt="vegImg"/>
            </div>
           

        </div>
      </div>
    </div>
  );
}
