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
      <a href="/MessengerPage"><div className="messagebutton">Message Eric <ion-icon name="chevron-forward-outline" className="Chairtester"></ion-icon></div></a> 
        <div className="userinfosection">
          <div class="parentprofile">
            <div class="div1profile">
              <img
                className="userprofileimage"
                src={require("./images/Eric Bouzaglou.png")}
              />

              <p className="profileabout">
                We are an alternative Buy Now Pay Later company that offers
                longer payment plans to allow users to fully leverage the time
                value of money. Our primary revenue sources come from eCommerce
                merchandisers for redirecting consumers to their platforms. We
                have no interest in earning profit from customers who fail to
                make payments on time. Our mission is to enable users to shop
                without worries of potential short-term liquidity problems.
              </p>

              <div class="parentbottoms">
                <div class="div1bottoms">
                  {" "}
                  Seeking:
                  <h2>1.8M</h2>
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
              </div>
            </div>
            <div class="div2profile">
              <h3 className="profiletitle">Weepay</h3>
              <p className="thenameprofile">
                Posted by Eric Bouzaglou CEO at Weepay
              </p>
            </div>
            <div class="div3profile">
              <div className="bigmatchscore">
                <p>Match Score:</p>
                <h2>95</h2>
              </div>

              <div class="parentcharts">
                <div class="div1charts"> 
                <p className="chartnumbersprofile">10</p>
                <p >Capital deployment </p>
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
                <div class="div2charts"> <p className="chartnumbersprofile">9</p>
                <p >Industry experience </p>
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
                /></div>
                <div class="div3charts"> <p className="chartnumbersprofile">10</p>
                <p >Time frame  </p>
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
                /></div>
                <div class="div4charts"> <p className="chartnumbersprofile">9</p>
                <p >Experience in Field  </p>
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
                /></div>
                <div class="div5charts"> <p className="chartnumbersprofile">10</p>
                <p >Educational Background  </p>
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
                /></div>
                <div class="div6charts"> <p className="chartnumbersprofile">10</p>
                <p >Geographical location  </p>
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
                /></div>
                <div class="div7charts"><p className="chartnumbersprofile">10</p>
                <p >Risk tolerance  </p>
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
                /> </div>
                <div class="div8charts"><p className="chartnumbersprofile">8</p>
                <p >Response Time  </p>
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
            src={require("./images/Weepay.png")}
          />
          <div className="infocardsectionprofile"></div>
        </div>
      </div>
    </div>
  );
}

export default Businessprofile;
