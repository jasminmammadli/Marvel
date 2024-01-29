import React from "react";
function Card({ thumbnail,index,activeNum,changeActiveNum,name }) {
  const { path, extension } = thumbnail;
  return (
    <div className={`characters-card ${index===activeNum && 'card-active'}`} onClick={()=>changeActiveNum(index)}>
      <div className="char-card-img">
        <img src={`${path}.${extension}`} alt="" />
      </div>
      <p>{name}</p>
    </div>
  );
}

export default Card;
