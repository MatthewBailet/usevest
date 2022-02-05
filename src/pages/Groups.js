import { useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";

import Searchbar from "../components/Searchbar";

function Groups() {
  useEffect(() => {
    const scriptTag = document.createElement("script");

    scriptTag.src = "https://unpkg.com/ionicons@5.1.2/dist/ionicons.js";
    scriptTag.async = true;

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);
  return (
    <div className="PageAAB">
      <Searchbar />
      <div className="Setter3">
      <h1 className="headeronecreator" >My Groups</h1>
        <div className="parentdc">
            
          <div className="div1dc">
          <a className="normala" href="/Investments">
          <h3 className="grouptitle">
              <ion-icon
                name="layers-outline"
                className="landingicon"
              ></ion-icon>
              PowerShare
              
            </h3>

          </a>
          
            <p className="Groupsequitynumber">10%</p>
            <p className="Groupsequitynumber2">Your Equity</p>
            <img
              className="groupsbackground"
              src={require("./images/group2.png")}
            ></img>
            <PieChart
              className="Groupspiechart"
              radius={15}
              lineWidth={21}
              startAngle={80}
              rounded
              animate
              data={[
                { title: "One", value: 90, color: "#454545" },
                { title: "Two", value: 10, color: "#13FF00" },
              ]}
            />
            <div className="groupdividerbox">
              <p className="groupmoney">
                | <b>200k</b>
              </p>

              <div className="investorbox">
                <p className="topgroupbox">
                  There are <b>4</b> Investors in this group
                </p>
                <p className="topgroupbox">
                  <b>- Mateo Cordoba</b>
                </p>
                <p className="topgroupbox2">
                  <b>- Tiffany Cave</b>
                </p>
                <p className="topgroupbox2">
                  <b>- Hugo Grant</b>
                </p>
                <p className="topgroupbox2">
                  <b>- Cassandra del passio </b>
                </p>
              </div>
            </div>
          </div>
          <div className="div2dc">
          <a className="normala" href="/Investments">
          <h3 className="grouptitle">
              <ion-icon
                name="layers-outline"
                className="landingicon"
              ></ion-icon>
                WEquity
              
            </h3>

          </a>
            <p className="Groupsequitynumber">15%</p>
            <p className="Groupsequitynumber2">Your Equity</p>
            <img
              className="groupsbackground"
              src={require("./images/group1.png")}
            ></img>
            <PieChart
              className="Groupspiechart"
              radius={15}
              lineWidth={21}
              startAngle={80}
              rounded
              animate
              data={[
                { title: "One", value: 85, color: "#454545" },
                { title: "Two", value: 15, color: "#13FF00" },
              ]}
            />
            <div className="groupdividerbox">
              <p className="groupmoney">
                | <b>1.65M</b>
              </p>

              <div className="investorbox">
                <p className="topgroupbox">
                  There are <b>3</b> Investors in this group
                </p>
                <p className="topgroupbox">
                  <b>- Mateo Cordoba</b>
                </p>
                <p className="topgroupbox2">
                  <b>- Phil Bailet</b>
                </p>
                <p className="topgroupbox2">
                  <b>- Serrena Tellemen</b>
                </p>
              </div>
            </div>
          </div>

          <div className="div3dc">
            {" "}
            <a href="/Discover">
              {" "}
              <img className="addsign" src={require("./images/add.png")}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groups;
