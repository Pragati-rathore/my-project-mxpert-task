import React from "react";
import "./Card.css";
import foodImg from "../../assets/food-1.jpg";

export default function Card() {
  const cardItem = [
    {
      price: "$152",
      itemName: "Grilled Fillet",
      desCription:
        " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
    },
    {
      Img: foodImg,
    },
    {
      price: "$152",
      itemName: "Grilled Fillet",
      desCription:
        " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
    },
    {
      Img: foodImg,
    },

    {
      price: "$152",
      itemName: "Grilled Fillet",
      desCription:
        " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
    },
    {
      Img: foodImg,
    },

    {
      price: "$152",
      itemName: "Grilled Fillet",
      desCription:
        " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
    },
    {
      Img: foodImg,
    },
    {
      price: "$152",
      itemName: "Grilled Fillet",
      desCription:
        " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
    },
  ];
  return (
    <>
      {cardItem.map((item, i) => (
        <div key={i} className={i % 2 === 0 ? "card" :"image-container" }>
          {item.Img ? (
            <img src={item.Img} alt="img" />
          ) : (
            <>
              <p className="price">{item.price}</p>
              <h3 className="item-name">{item.itemName}</h3>
              <p className="item-decpn">{item.desCription}</p>
            </>
          )}
        </div>
      ))}
    </>
   
  );
}
