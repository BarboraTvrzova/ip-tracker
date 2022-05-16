import React from 'react'
import "./Search.css"
import chevron from "./img/chevron.png"

const Search = () => {
  return (
    <div>
      <div className="background">
        <h2>IP Address Tracker</h2>
        <div className="input-container">
          <input type="text"      placeholder="Search for any IP address or domain" />
          <button><img src={chevron} alt="" /></button>
        </div>
      </div>
      <div className="result">
        <div className="col">
          <h3>IP address</h3>
          <p>188.979.907.097</p>
        </div>
        <div className="col">
          <h3>Location</h3>
          <p>Brooklyn, NY
10001</p>
        </div>
        <div className="col">
          <h3>Time zone</h3>
          <p>UTC</p>
        </div>
        <div className="col">
          <h3>ISP</h3>
          <p>SpacxeLink</p>
        </div>
      </div>
    </div>
  )
}

export default Search
