import React from "react";

function ComicCard(props) {
  const { thumbnail, prices, title } = props;
  const {path,extension}=thumbnail
  return (
    <div className="comicCard">
      <div className="comicImg">
        <img src={`${path}.${extension}`} alt="" />
      </div>
      <div>
      <p className="comic-title">{title}</p>
      <p className="comic-price">{prices[0].price==0 ? 'Not Available' : prices[0].price}</p>
      </div>
    </div>
  );
}

export default ComicCard;
