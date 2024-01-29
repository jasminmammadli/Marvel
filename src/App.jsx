import React, { useEffect, useState } from "react";
import Characters from "./components/Characters/Characters";
import { Routes, Route } from "react-router-dom";
import Comics from "./components/Comics/Comics";
import Header from "./components/Header";
import "./App.css";
import axios from "axios";
import DataContext from "./Context/DataContext";
import HomePage from "./components/HomePage/HomePage";
import Detail from "./components/Detail/Detail";
function App() {
  const [data, setData] = useState([]);
  const [comicsData,setComicsData]=useState([])

  useEffect(() => {
    //Character API
    axios
      .get(
        "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=23f73c6784f2f80d3b29cab33fd30ff7&hash=721beb32bc3e66c06a76db97ae763b92"
      )
      .then((data) => {
        setData(data.data.data.results);
      });

      //Comics API
    axios
      .get(
        "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=23f73c6784f2f80d3b29cab33fd30ff7&hash=721beb32bc3e66c06a76db97ae763b92"
      )
      .then((res) => {
        setComicsData(res.data.data.results)
      });
  }, []);

  let value={data,setData,comicsData,setComicsData}
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <DataContext.Provider value={value}>
            <Routes>
              <Route path="/" element={<Characters />} />
              <Route path="/:id" element={<HomePage />} />
              <Route path="/comics" element={<Comics />} />
              <Route path="/comics/:id" element={<Detail/>}/>
            </Routes>
          </DataContext.Provider>
        </div>
      </main>
    </>
  );
}

export default App;
