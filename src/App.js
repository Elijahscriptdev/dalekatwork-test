import React, { useState, useEffect } from "react";
import List from "./components/list";
import "./App.css";

const App = () => {
  const [data, setData] = useState("");
  const [color, setColor] = useState({});

  const handleAdminClick = () => {
    setData(["Adminentry1", "Adminentyr2", "Adminentry3", "Adminentryr4"]);
    setColor({
      backgroundColor: "#D3D3D3",
      height: "100vh",
    });
  };

  const handleAppClick = () => {
    setData(["Appentry1", "Appentyr2", "Appentry5", "Appentry4"]);
    setColor({
      backgroundColor: "white",
    });
  };

  const handleListHover = (event) => {
    event.preventDefault();
    const { target } = event;
    target.style.backgroundColor = "Grey";
  };

  const handleListHoverOut = (event) => {
    event.preventDefault();
    const { target } = event;
    target.style.backgroundColor = "white";
  };

  useEffect(() => {
    setData(["Appentry1", "Appentyr2", "Appentry5", "Appentyr4"]);
  }, []);

  return (
    <div style={color}>
      <div className='navbar'>
        <div className='logo'>
          <ul>
            <li>LOGO</li>
          </ul>
        </div>
        <div className='nav-items'>
          <ul>
            <li>
              <input
                onClick={handleAppClick}
                type='radio'
                id='male'
                name='gender'
                value='male'
              />
              <label>App</label>
            </li>
            <li>
              <input
                onClick={handleAdminClick}
                type='radio'
                id='male'
                name='gender'
                value='male'
              />
              <label>Admin</label>
            </li>
          </ul>
        </div>
      </div>

      <ul className='list-container'>
        {data &&
          data.map((item, index) => {
            return (
              <List
                key={index}
                listItem={item}
                handleHover={handleListHover}
                handleHoverOut={handleListHoverOut}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default App;
