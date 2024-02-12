import React from "react";
import "./NewsSection.css";
import Heading from "../Heading/Heading";
import NewsCards from "./NewsCards";
import Button from "../Button/Button";


export default function NewsSection() {
  const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "25px",
  };
  return (
   <div style={{backgroundColor:"rgb(238 238 238)"}}>
     <div className="container-main">
      <div className="news-box">
        <div className="hd-news">
          <Heading
            sectionText="DON'T MISS"
            mainText="Our News And Events"
            styleHd={styles}
          />
          <p className="news-para">
            It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </p>
        </div>
        <div>
          <NewsCards/>
        </div>
        <div className="readBtn">
            <Button text="READ MORE"/>
        </div>
      </div>
    </div>
   </div>
  );
}
