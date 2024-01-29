import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../Context/DataContext";

function InfoSidebar({ cardInfoState,setActiveNum }) {
  const [sidebarData, setSidebarData] = useState(null);
  const { data } = useContext(DataContext);
  const [inp, setInp] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    setSidebarData(cardInfoState);
  }, [cardInfoState]);
  const handleChange = (e) => {
    setInp(e.target.value);
  };
  const searchCharacter = (e) => {
    let a = data?.find(
      (item) => item.name.toLowerCase().includes(inp.trim().toLowerCase()
    ));
    console.log(a);
    if (a) {
      setMessage("Succesfully");
      setSidebarData(a);
      setActiveNum(null)
    } else {
      setMessage("The character was not found. Check the name and try again");
    }
    setInp("");
  };
  return (
    <div className="sidebar">
      {sidebarData && (
        <div className="sidebar-info">
          <div className="sidebar-img-wrapper">
            <div className="sidebar-img">
              <img
                src={`${sidebarData.thumbnail?.path}.${sidebarData?.thumbnail?.extension}`}
                alt={sidebarData.name}
              />
            </div>
            <div className="sidebar-img-right">
              <p className="sidebar-character-name">{sidebarData.name}</p>
              <div className="sidebar-btns">
                <Link to={`/${sidebarData.id}`}>homepage</Link>
                <Link
                  to={sidebarData.urls.find((item) => item.type == "wiki")?.url}
                >
                  wiki
                </Link>
              </div>
            </div>
          </div>
          <div className="sidebar-character-data">
            {sidebarData.description}
          </div>
          <div className="sidebar-comics-section">
            <span className="text-comics">Comics:</span>
            {sidebarData.comics.items.map((item, index) => (
              <p key={index}>{item.name}</p>
            ))}
          </div>
        </div>
      )}
      <div className="sidebar-search">
        <p className="search-content">Or find a character by name:</p>
        <div className="search-input">
          <div className="inp-btn">
            <input
              type="text"
              placeholder="Enter Name"
              onChange={handleChange}
              value={inp}
            />
            <button onClick={searchCharacter}>find</button>
          </div>
          <div
          style={{color:`${message=='Succesfully' ? '#03710e' : '#9f0013'}`}} 
          className="message-text"
          >
          {
            message ? `${message}. There is ${sidebarData.name}` : ''
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSidebar;
