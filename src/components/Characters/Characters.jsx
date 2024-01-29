import React, { useContext, useEffect, useState } from "react";
import DataContext from "../../Context/DataContext";
import Card from "./Card";
import InfoSidebar from "./InfoSidebar";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
function Characters() {
  const { data } = useContext(DataContext);
  const [activeNum, setActiveNum] = useState(null);
  const [cardInfoState, setCardInfoState] = useState(null);
  const [chosenRandomCharacter, setChosenRandomCharacter] = useState(null);
  function changeActiveNum(objIndex) {
    setActiveNum(objIndex);
    setCardInfoState(data?.[objIndex]);
  }
  function chooseRandomCharacter() {
    setChosenRandomCharacter(data?.[Math.floor(Math.random() * data.length)]);
  }
  return (
    <div>
      <div className="random-character">
        {
          chosenRandomCharacter && (<div className="character">
          <div className="character-img">
            <img
              src={`${chosenRandomCharacter.thumbnail?.path}.${chosenRandomCharacter.thumbnail?.extension}`}
              alt=""
            />
          </div>
          <div className="character-content">
            <p className="character-name">{chosenRandomCharacter.name}</p>
            <p className="character-info">
              {chosenRandomCharacter.description}
            </p>
            <div className="btns">
              <Link to={`/${chosenRandomCharacter.id}`}>homepage</Link>
              <Link to={chosenRandomCharacter.urls.find(item=>item.type=="wiki")?.url}>wiki</Link>
            </div>
          </div>
        </div>)
        }
        <div className={`choose-character ${!chosenRandomCharacter && 'width' }`}>
          <div>
            <p>Random character for today!</p>
            <p>Do you want to get to know him better?</p>
          </div>
          <div>
            <p>Or choose another one</p>
            <button onClick={chooseRandomCharacter}>try it</button>
          </div>
        </div>
      </div>

      <div className="cards-data">
        <div className="cards-wrapper">
          {data.map((item, index) => (
            <Card
              key={index}
              {...item}
              index={index}
              changeActiveNum={changeActiveNum}
              activeNum={activeNum}
              setActiveNum={setActiveNum}
            />
          ))}
        </div>
        <div className="card-info">
          {cardInfoState ? (
            <InfoSidebar cardInfoState={cardInfoState} setActiveNum={setActiveNum} />
          ) : (
            <div className="skeleton">
              <p className="skeleton-head-content">
                Please select a character to see information
              </p>
              <Stack spacing={1}>
                <div className="skeleton-flex">
                  <Skeleton
                    variant="circular"
                    className="skeleton-img"
                    width={40}
                    height={40}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={"100%"}
                  />
                </div>
                <div className="skeleton-section">
                  <Skeleton variant="rectangular" width="100%" height={40} />
                  <Skeleton variant="rectangular" width="100%" height={40} />
                  <Skeleton variant="rectangular" width="100%" height={40} />
                </div>
              </Stack>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Characters;
