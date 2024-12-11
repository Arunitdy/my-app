
// components/Chef.js
import React, { useState } from 'react';
import './Chef.css';

const Chef = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setList((prevList) => [...prevList, inputValue]);
    }
    setInputValue("");
  };

  return (
    <div className="chef">
      <div className="navbar">
        <img
          className="logo"
          alt="Chef logo"
          src="https://w7.pngwing.com/pngs/664/579/png-transparent-chef-holding-tray-with-food-illustration-chef-restaurant-menu-waiter-beauty-chef-food-hand-logo-thumbnail.png"
        />
        <h1>Chef Cloud</h1>
      </div>
      <form className="inputButton" onSubmit={handleSearch}>
        <input
          placeholder="e.g., orange"
          type="text"
          className="ingredient"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button type="submit">+ Add Ingredient</button>
      </form>
      <h2>Ingredients:</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Chef;