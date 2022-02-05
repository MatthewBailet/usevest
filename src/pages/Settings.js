import Searchbar from "../components/Searchbar";
import React from "react";
import $ from "jquery";



function Settings() {
    
  
  return (
    <div className="PageAB">
      <Searchbar />
      <div className="Setter">
        <h1>Settings</h1>
        <div className="settingscontainer">
          <div class="parentq">
            <div class="div1q">
              {" "}
              Nessecary Capital:
              <h2>&gt; 3M</h2>
              <output
                id="relationship-status-output"
                class="relationship-status-output color-default"
              >
                0
              </output>
              <input
                type="range"
                id="relationship-status-slider"
                class="relationship-status-slider"
                value="0"
                min="0"
                max="10"
                step="1"
              ></input>
            </div>
            <div class="div2q"> Equity Offering:</div>
            <div class="div3q"> Round:</div>
            <div class="div4q"> Interested Industries:</div>
            <div class="div5q"> Preffered Time Horizon:</div>
            <div class="div6q"> Involvement Level:</div>
            <div class="div7q">Preffered Locations: </div>
            <div class="div8q"> Average Response Time:</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
