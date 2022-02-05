import profilepage from "../components/profilepage";
import Searchbar from "../components/Searchbar";
import { PieChart } from "react-minimal-pie-chart";

import { useEffect } from "react";
function Businessprofile(props) {
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
    <div className="PageAB">
      <Searchbar />
      <div className="Setter">
        <a href="/MessengerPage">
          <div className="messagebutton">
            Message Michelle{" "}
            <ion-icon
              name="chevron-forward-outline"
              className="Chairtester"
            ></ion-icon>
          </div>
        </a>
        <div className="userinfosection">
          <div class="parentprofile">
            <div class="div1profile">
              <img
                className="userprofileimage"
                src={require("./images/Michelle.jpg")}
              />

              <p className="profileabout">
                Our company plans to seek out contracts with desalination plants
                across the globe to source the sodium required to produce
                Sodium-ion batteries for electric vehicles. Our research into
                sodium-ion batteries is very promising. We anticipate our
                batteries being more durable, less expensive, and more
                environmentally conscious than contemporary Lithium-Ion EV
                batteries.
              </p>

              <div class="parentbottoms">
                <div class="div1bottoms">
                  {" "}
                  Seeking:
                  <h2>2M</h2>
                </div>
                <div class="div2bottoms">
                  {" "}
                  Equity Offered:
                  <h2>15%</h2>
                </div>
                <div class="div3bottoms">
                  {" "}
                  Round:
                  <h2>Seed</h2>
                </div>
                <div class="div4bottoms">
                  {" "}
                  Industry:
                  <h2>Technology</h2>
                </div>
                <div class="div5bottoms">
                  {" "}
                  Location:
                  <h2>
                    California,<br></br>United States
                  </h2>
                </div>
              </div>
            </div>
            <div class="div2profile">
              <h3 className="profiletitle">SodiEnergy</h3>
              <p className="thenameprofile">
                Posted by Michelle Hartman CEO at SodiEnergy
              </p>
            </div>
            <div class="div3profile">
              <div className="bigmatchscore">
                <p>Match Score:</p>
                <h2>90</h2>
              </div>

              <div class="parentcharts">
                <div class="div1charts">
                  <p className="chartnumbersprofile">9</p>
                  <p>
                    <br></br>Capital{" "}
                  </p>
                  <PieChart
                    className="profilepiechart"
                    radius={45}
                    lineWidth={21}
                    startAngle={80}
                    rounded
                    animate
                    data={[
                      { title: "One", value: 0, color: "#454545" },
                      { title: "Two", value: 100, color: "#00C5FF" },
                    ]}
                  />
                </div>
                <div class="div2charts">
                  {" "}
                  <p className="chartnumbersprofile">8</p>
                  <p>Equity Offering </p>
                  <PieChart
                    className="profilepiechart"
                    radius={45}
                    lineWidth={21}
                    startAngle={80}
                    rounded
                    animate
                    data={[
                      { title: "One", value: 0, color: "#454545" },
                      { title: "Two", value: 100, color: "#00C5FF" },
                    ]}
                  />
                </div>
                <div class="div3charts">
                  {" "}
                  <p className="chartnumbersprofile">8</p>
                  <p>
                    <br></br>Round{" "}
                  </p>
                  <PieChart
                    className="profilepiechart"
                    radius={45}
                    lineWidth={21}
                    startAngle={80}
                    rounded
                    animate
                    data={[
                      { title: "One", value: 0, color: "#454545" },
                      { title: "Two", value: 100, color: "#00C5FF" },
                    ]}
                  />
                </div>
                <div class="div4charts">
                  {" "}
                  <p className="chartnumbersprofile">9</p>
                  <p>
                    <br></br>Industry Fit{" "}
                  </p>
                  <PieChart
                    className="profilepiechart"
                    radius={45}
                    lineWidth={21}
                    startAngle={80}
                    rounded
                    animate
                    data={[
                      { title: "One", value: 0, color: "#454545" },
                      { title: "Two", value: 100, color: "#00C5FF" },
                    ]}
                  />
                </div>
                <div class="div5charts">
                  {" "}
                  <p className="chartnumbersprofile">9</p>
                  <p>Time Horizon </p>
                  <PieChart
                    className="profilepiechart"
                    radius={45}
                    lineWidth={21}
                    startAngle={80}
                    rounded
                    animate
                    data={[
                      { title: "One", value: 0, color: "#454545" },
                      { title: "Two", value: 100, color: "#00C5FF" },
                    ]}
                  />
                </div>
                <div class="div6charts">
                  {" "}
                  <p className="chartnumbersprofile">10</p>
                  <p>Involvement Level </p>
                  <PieChart
                    className="profilepiechart"
                    radius={45}
                    lineWidth={21}
                    startAngle={80}
                    rounded
                    animate
                    data={[
                      { title: "One", value: 0, color: "#454545" },
                      { title: "Two", value: 100, color: "#00C5FF" },
                    ]}
                  />
                </div>
                <div class="div7charts">
                  <p className="chartnumbersprofile">8</p>
                  <p>Location Proximity </p>
                  <PieChart
                    className="profilepiechart"
                    radius={45}
                    lineWidth={21}
                    startAngle={80}
                    rounded
                    animate
                    data={[
                      { title: "One", value: 0, color: "#454545" },
                      { title: "Two", value: 100, color: "#00C5FF" },
                    ]}
                  />{" "}
                </div>
                <div class="div8charts">
                  <p className="chartnumbersprofile">8</p>
                  <p>Response Time </p>
                  <PieChart
                    className="profilepiechart"
                    radius={45}
                    lineWidth={21}
                    startAngle={80}
                    rounded
                    animate
                    data={[
                      { title: "One", value: 0, color: "#454545" },
                      { title: "Two", value: 100, color: "#00C5FF" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>

          <img
            className="userprofilebackgroundimage"
            src={require("./images/Sodienergy.jpg")}
          />
          <div className="infocardsectionprofile"></div>
        </div>
      </div>
    </div>
  );
}

export default Businessprofile;
