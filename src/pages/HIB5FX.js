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
    <div className="PageA">
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
                  <h2>50M</h2>
                </div>
                <div class="div2bottoms">
                  {" "}
                  Equity Offered:
                  <h2>5%</h2>
                </div>
                <div class="div3bottoms">
                  {" "}
                  Round:
                  <h2>Series C</h2>
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
                  <p className="chartnumbersprofile">9</p>
                  <p>Capital deployment </p>
                  <PieChart
                    className="profilepiechart"
                    radius={35}
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
                  <p className="chartnumbersprofile">7</p>
                  <p>Industry experience </p>
                  <PieChart
                    className="profilepiechart"
                    radius={35}
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
                  <p>Time frame </p>
                  <PieChart
                    className="profilepiechart"
                    radius={35}
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
                  <p>Experience in Field </p>
                  <PieChart
                    className="profilepiechart"
                    radius={35}
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
                  <p className="chartnumbersprofile">8</p>
                  <p>Educational Background </p>
                  <PieChart
                    className="profilepiechart"
                    radius={35}
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
                  <p className="chartnumbersprofile">7</p>
                  <p>Geographical location </p>
                  <PieChart
                    className="profilepiechart"
                    radius={35}
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
                  <p>Risk tolerance </p>
                  <PieChart
                    className="profilepiechart"
                    radius={35}
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
                    radius={35}
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
