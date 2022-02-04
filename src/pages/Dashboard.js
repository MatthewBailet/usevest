import { PieChart } from "react-minimal-pie-chart";
import Searchbar from "../components/Searchbar";

function Dashboardpage(props) {
  return (
    <div className="PageA">
      <Searchbar />
      <div className="Setter">
        <h1>My Investments</h1>

        <div className="parentinv">
          <div className="div1inv">
            <div className="listcontainer">
              <div class="parenti">
                <div className="div0i">
                  <div class="parenttrap">
                    <div class="div1trap"> Name:</div>
                    <div class="div2trap">Capital: </div>
                    <div class="div3trap">Equity: </div>
                    <div class="div4trap">Round: </div>
                    <div class="div5trap">Investment date: </div>
                  </div>
                </div>
                <div className="div1i">
                  <div class="parenttrap">
                    <div class="div1trap" className="Element12"> Bam! Floors </div>
                    <div class="div2trap" className="Element11">20M </div>
                    <div class="div3trap" className="Element11">30% </div>
                    <div class="div4trap" className="Element11">Series B </div>
                    <div class="div5trap" className="Element11"> 08/12/21</div>
                  </div>
                </div>
                <div className="div2i">
                <div class="parenttrap">
                    <div class="div1trap" className="Element12"> PowerShare </div>
                    <div class="div2trap" className="Element11">200k </div>
                    <div class="div3trap" className="Element11">10% </div>
                    <div class="div4trap" className="Element11">Pre-Seed </div>
                    <div class="div5trap" className="Element11"> 11/01/22</div>
                  </div> 
                  </div>
                <div className="div3i"> 
                <div class="parenttrap">
                    <div class="div1trap" className="Element12"> Comprehension   </div>
                    <div class="div2trap" className="Element11">30M </div>
                    <div class="div3trap" className="Element11">20% </div>
                    <div class="div4trap" className="Element11">Series B </div>
                    <div class="div5trap" className="Element11"> 05/05/21</div>
                  </div> 
                </div>
                <div className="div4i">
                <div class="parenttrap">
                    <div class="div1trap" className="Element12"> WEquity   </div>
                    <div class="div2trap" className="Element11">1.65M </div>
                    <div class="div3trap" className="Element11">15% </div>
                    <div class="div4trap" className="Element11">Seed Round</div>
                    <div class="div5trap" className="Element11"> 01/06/22</div>
                  </div> 
                   </div>
                <div className="div5i"> 
                <div class="parenttrap">
                    <div class="div1trap" className="Element12"> Clean Mining Devices    </div>
                    <div class="div2trap" className="Element11">150k </div>
                    <div class="div3trap" className="Element11">25% </div>
                    <div class="div4trap" className="Element11">Seed Round</div>
                    <div class="div5trap" className="Element11"> 06/02/21</div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
          <div className="div2inv">
            <div className="piechartcontainer">
              <div className="piechartinner">
                <h3>
                  <u>$52M</u>
                </h3>
                <PieChart
                  className="piechart"
                  radius={39}
                  lineWidth={15}
                  rounded
                  animate
                  data={[
                    { title: "One", value: 38, color: "#0CD6FF" },
                    { title: "Two", value: 1, color: "#0C9CFF" },
                    { title: "Three", value: 57, color: "#0003D7" },
                    { title: "Four", value: 5, color: "#00D7B3" },
                    { title: "Five", value: 1, color: "#0090A4" },
                  ]}
                />
                <div className="investorsheet">
                  <p>
                    Bam! Floors - <b>38.46%</b>
                    <div className="capital"></div>
                  </p>
                  <p>
                    PowerShare - <b> &lt; 1%</b>
                    <div className="capital2"></div>
                  </p>
                  <p>
                    Comprehension - <b>57.69%</b>
                    <div className="capital3"></div>
                  </p>
                  <p>
                    WEquity - <b>3.17%</b>
                    <div className="capital4"></div>
                  </p>
                  <p>
                    Clean Mining Devices - <b>&lt; 1%</b>
                    <div className="capital5"></div>
                  </p>
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
