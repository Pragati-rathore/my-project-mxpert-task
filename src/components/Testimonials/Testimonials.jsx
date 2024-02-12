import React from "react";
import "./Testimonials.css";
import Heading from "../Heading/Heading";
import Details from "./Details";

export default function Testimonials() {
    const styles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap:"25px"


    };
  return (
    <div className="container-main">
        <div className="texto-section">
            <div>
            <Heading sectionText="TESTIMONIALS" mainText="What People are Saying" styleHd={styles}/>
            </div>
            <div>
                <Details/>
            </div>
     
        </div>
     
    </div>
  );
}
