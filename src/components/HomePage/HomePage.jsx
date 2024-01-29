import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import avengers from "./../img/Avengers.png";
import logo from "./../img/Avengers logo.png";
import Banner from "../Banner";
function HomePage() {
  const { id } = useParams();
  const [singleData, setSingleData] = useState([]);
  const getData = () => {
    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=23f73c6784f2f80d3b29cab33fd30ff7&hash=721beb32bc3e66c06a76db97ae763b92`
      )
      .then((res) => {
        setSingleData(res.data.data.results[0]),
          console.log(res.data.data.results);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <Banner/>
      <div className="avengers-caracter-info">
        <div className="caracter-info-img">
            <img src={`${singleData.thumbnail?.path}.${singleData.thumbnail?.extension}`} alt="" />
        </div>
        <div className="caracter-info-content">
            <p>{singleData.name}</p>
            <p>{singleData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
