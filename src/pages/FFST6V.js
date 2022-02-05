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
            Message Tyler{" "}
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
                src={require("./images/Tyler.jpg")}
              />

              <p className="profileabout">
                We plan to revolutionize the fast-food industry by automating
                the labor related to simple cooking processes. Through custom
                grills, automated arms, temperature trackers, and timers, we are
                certain we could reduce fast-food chains’ reliance on employees.
                Our process aims to lessen operational expenses, improve
                consistency in quality of food, and provide business owners with
                more confidence in their operations.
              </p>

              <div class="parentbottoms">
                <div class="div1bottoms">
                  {" "}
                  Seeking:
                  <h2>400k</h2>
                </div>
                <div class="div2bottoms">
                  {" "}
                  Equity Offered:
                  <h2>10%</h2>
                </div>
                <div class="div3bottoms">
                  {" "}
                  Round:
                  <h2>Pre-seed</h2>
                </div>
                <div class="div4bottoms">
                  {" "}
                  Industry:
                  <h2>Food Service</h2>
                </div>
                <div class="div5bottoms">
                  {" "}
                  Location:
                  <h2>Quebec,<br></br>Canada</h2>
                </div>
              </div>
            </div>
            <div class="div2profile">
              <h3 className="profiletitle">FastestFood </h3>
              <p className="thenameprofile">
                Posted by Tyler Brousseau Founder at FastestFood
              </p>
            </div>
            <div class="div3profile">
              <div className="bigmatchscore">
                <p>Match Score:</p>
                <h2>75</h2>
              </div>

              <div class="parentcharts">
                <div class="div1charts">
                  <p className="chartnumbersprofile">9</p>
                  <p><br></br>Capital </p>
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
                  <p className="chartnumbersprofile">9</p>
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
                  <p className="chartnumbersprofile">6</p>
                  <p><br></br>Round </p>
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
                  <p className="chartnumbersprofile">8</p>
                  <p><br></br>Industry Fit </p>
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
                  <p className="chartnumbersprofile">6</p>
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
                  <p className="chartnumbersprofile">8</p>
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
                  <p className="chartnumbersprofile">9</p>
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
                  <p className="chartnumbersprofile">7</p>
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
            src={require("./images/Fastest.jpg")}
          />
          <div className="infocardsectionprofile"></div>
        </div>
      </div>
    </div>
  );
}

export default Businessprofile;
