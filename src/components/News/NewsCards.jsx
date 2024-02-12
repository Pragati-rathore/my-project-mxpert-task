import React from "react";
import NewsImg from "../../assets/news-img.jpg";
import "./NewsSection.css";
export default function NewsCards() {
  const newsCard = [
    {
      IMG: NewsImg,
      heading: "News For Today",
      subHd: "CATEGORY",
      para: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      IMG: NewsImg,
      heading: "News For Today",
      subHd: "CATEGORY",
      para: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      IMG: NewsImg,
      heading: "News For Today",
      subHd: "CATEGORY",
      para: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
  ];

  return (
    <div className="news-flex">
      {newsCard.map((item, i) => (
        <div key={i} className="inner-flex">
          <div className="img-news">
            <img src={item.IMG} alt="news" />
          </div>
          <div className="dtls">
            <h1 className="hdNews">{item.heading}</h1>
            <p className="subHd-news">{item.subHd}</p>
            <p className="para-news">{item.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
