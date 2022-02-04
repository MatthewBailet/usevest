import { PieChart } from "react-minimal-pie-chart";

function Dashboardpage(props) {
  return (
    <div className="PageA">
      <div className="Setter">
        <h1>My Investments</h1>

        <div className="parentinv">
          <div className="div1inv">
            <div className="listcontainer">
              <div class="parenti">
                <div className="div0i"></div>
                <div className="div1i"></div>
                <div className="div2i"> </div>
                <div className="div3i"> </div>
                <div className="div4i"> </div>
                <div className="div5i"> </div>


              </div>
            </div>
          </div>
          <div className="div2inv">
            <div className="piechartcontainer">
              <div className="piechartinner">
                <h3><u>$2.5M</u></h3>
                <PieChart
                  className="piechart"
                  radius={39}
                  lineWidth={15}
                  rounded
                  animate
                  data={[
                    { title: "One", value: 20, color: "#0CD6FF" },
                    { title: "Two", value: 20, color: "#0C9CFF" },
                    { title: "Three", value: 20, color: "#0003D7" },
                    { title: "Four", value: 30, color: "#00D7B3" },
                    { title: "Five", value: 10, color: "#0090A4" },

                  ]}
                />
                <div className="investorsheet">
                <p>LMAO company - <b>18%</b><div className="capital"></div></p>
                <p>Something Capital - <b>18%</b><div className="capital2"></div></p>
                <p>This one too - <b>18%</b><div className="capital3"></div></p>
                <p>Oopsie doopies ryan - <b>18%</b><div className="capital4"></div></p>
                <p>nein nein nein - <b>18%</b><div className="capital5"></div></p>
                </div>
 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboardpage;
