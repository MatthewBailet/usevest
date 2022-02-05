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
            Message Jack{" "}
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
                src={require("./images/Jack.jpg")}
              />

              <p className="profileabout">
                Our mission is to enable elderly and disabled people to travel
                across floors seamlessly through our patented, mechanically
                efficient home elevators. Our home improvement devices are
                highly durable, they considerably improve the value of the
                homes, and they are minimally invasive in a home environment
              </p>

              <div class="parentbottoms">
                <div class="div1bottoms">
                  {" "}
                  Seeking:
                  <h2>30M</h2>
                </div>
                <div class="div2bottoms">
                  {" "}
                  Equity Offered:
                  <h2>30%</h2>
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
                    Madrid,<br></br>Spain
                  </h2>
                </div>
              </div>
            </div>
            <div class="div2profile">
              <h3 className="profiletitle">Elevatus Devices </h3>
              <p className="thenameprofile">
                Posted by Jack Powers CFO at Elevatus Devices
              </p>
            </div>
            <div class="div3profile">
              <div className="bigmatchscore">
                <p>Match Score:</p>
                <h2>77</h2>
              </div>

              <div class="parentcharts">
                <div class="div1charts">
                  <p className="chartnumbersprofile">10</p>
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
                  <p className="chartnumbersprofile">6</p>
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
                  <p className="chartnumbersprofile">10</p>
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
                  <p className="chartnumbersprofile">6</p>
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
                  <p className="chartnumbersprofile">9</p>
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
            src={require("./images/Elevatus.jpg")}
          />
          <div className="infocardsectionprofile"></div>
        </div>
      </div>
    </div>
  );
}

export default Businessprofile;
