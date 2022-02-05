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
            Message Irene{" "}
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
                src={require("./images/Irene.jpg")}
              />

              <p className="profileabout">
                Our competitive strategy game web app consolidates the most
                competitive strategy games in the world and provides valuable
                gameplay analysis tools for serious users looking to improve
                their skills. With six million weekly users, we are committed to
                improving the skills of committed players, while also growing
                games that have recently been overlooked. Consumers can opt to
                pay for various analysis packages created specifically to
                improve players on any of the games on our site.
              </p>

              <div class="parentbottoms">
                <div class="div1bottoms">
                  {" "}
                  Seeking:
                  <h2>10M</h2>
                </div>
                <div class="div2bottoms">
                  {" "}
                  Equity Offered:
                  <h2>15%</h2>
                </div>
                <div class="div3bottoms">
                  {" "}
                  Round:
                  <h2>Series B</h2>
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
                    Florida,<br></br>United States
                  </h2>
                </div>
              </div>
            </div>
            <div class="div2profile">
              <h3 className="profiletitle">WellPlayed </h3>
              <p className="thenameprofile">
                Posted by Irene Mays CEO at WellPlayed
              </p>
            </div>
            <div class="div3profile">
              <div className="bigmatchscore">
                <p>Match Score:</p>
                <h2>72</h2>
              </div>

              <div class="parentcharts">
                <div class="div1charts">
                  <p className="chartnumbersprofile">6</p>
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
                  <p className="chartnumbersprofile">7</p>
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
                  <p className="chartnumbersprofile">6</p>
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
                  <p className="chartnumbersprofile">7</p>
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
                  <p className="chartnumbersprofile">5</p>
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
            src={require("./images/Wellplayed.jpg")}
          />
          <div className="infocardsectionprofile"></div>
        </div>
      </div>
    </div>
  );
}

export default Businessprofile;
