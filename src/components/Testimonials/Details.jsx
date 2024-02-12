import React from "react";
import { FaStar } from "react-icons/fa";
import "./Testimonials.css"
export default function Details() {
  const peopleData = [
    {
      titel: "A Great Find",
      details:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
      name: "Divi",
    },
    {
      titel: "A Great Find",
      details:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
      name: "Divi",
    },
    {
      titel: "A Great Find",
      details:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
      name: "Divi",
    },
    {
      titel: "A Great Find",
      details:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
      name: "Divi",
    },
  ];

  return (
    <div className="flex-card">
      {peopleData.map((item, i) => (
        <div key={i} className="items-testo">
          <div className="starts">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <h3 className="title">{item.titel}</h3>
          <p className="details">{item.details}</p>
          <p className="testo-name">{item.name}</p>
        </div>
      ))}
    </div>
  );
}
