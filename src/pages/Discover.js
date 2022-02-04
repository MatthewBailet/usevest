import Card from "../components/card";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";


function Discoverpage() {
  return (
    <div className="PageA">
      <Searchbar/>
      <div className="Setter">
        <div className="parentd">
          <div className="div1d"> 
            <Link to="/MHA1Xi">
              <Card
                MatchScore="95%"
                Name="WeePay"
                Seeking="$1.8M for 15%"
                Round="Seed Round"
                Posted="Eric Bouzaglou CEO at WeePay"
                pfp={require("./images/Eric Bouzaglou.png")}
                background={require("./images/Weepay.png")}
              />
            </Link>
          </div>
          <div className="div2d">
          <Link to="/MHA1Xi">
              <Card
              MatchScore="94%"
              Name="CarbonRecap "
              Seeking="$15m for 20%"
              Round="Series A"
              Posted="Alexa Petrov CCO at CarbonRecap"
              pfp={require("./images/Alexa.png")}
              background={require("./images/Carbonrecap.jpg")}
            />
          </Link>
            
          </div>
          <div className="div3d">
              <Link to ="/">
              <Card
              MatchScore="90%"
              Name="VShop"
              Seeking="$2M for 25%"
              Round="Seed Round"
              Posted="Matthew Filippone CCO at VShop"
              pfp={require("./images/fili.png")}
              background={require("./images/Vshop.jpg")}
            />
              </Link>

          </div>
        </div>
      </div>
      <div className="Setter">
        <div className="parentd">
          <div className="div1d">
            <Link to="/MHA1Xi">
              <Card
                MatchScore="90%"
                Name="SodiEnergy"
                Seeking="$2M for 10%"
                Round="Seed Round"
                Posted="Michelle Hartman CEO at SodiEnergy"
                pfp={require("./images/Michelle.jpg")}
                background={require("./images/Sodienergy.jpg")}
              />
            </Link>
          </div>
          <div className="div2d">
          <Link to="/MHA1Xi">
              <Card
              MatchScore="89%"
              Name="Tokenz"
              Seeking="$4M for 5%"
              Round="Series A"
              Posted="Ryan Folly CEO at Tokenz"
              pfp={require("./images/Ryan.jpg")}
              background={require("./images/Tokenz.jpg")}
            />
          </Link>
            
          </div>
          <div className="div3d">
              <Link to ="/">
              <Card
              MatchScore="87%"
              Name="Gymtraq"
              Seeking="$30M for 5%"
              Round="Series B"
              Posted="Isabella Ullman CCO at Gymtraq"
              pfp={require("./images/Isabelle.jpg")}
              background={require("./images/Gymtraq.jpg")}
            />
              </Link>

          </div>
        </div>
      </div>
      <div className="Setter">
        <div className="parentd">
          <div className="div1d">
            <Link to="/MHA1Xi">
              <Card
                MatchScore="87%"
                Name="Elevatus Devices "
                Seeking="$50M for 5%"
                Round="Series C"
                Posted="Jack Powers CFO at Elevatus Devices"
                pfp={require("./images/Jack.jpg")}
                background={require("./images/Elevatus.jpg")}
              />
            </Link>
          </div>
          <div className="div2d">
          <Link to="/MHA1Xi">
              <Card
              MatchScore="87%"
              Name="FastestFood"
              Seeking="$400k for 5%"
              Round="Pre-seed"
              Posted="Tyler Brousseau Founder at Fastest Food"
              pfp={require("./images/Tyler.jpg")}
              background={require("./images/Fastest.jpg")}
            />
          </Link>
            
          </div>
          <div className="div3d">
              <Link to ="/">
              <Card
              MatchScore="01%"
              Name="WellPlayed"
              Seeking="$10M for 15%"
              Round="Series B"
              Posted="Irene Mays CEO at WellPlayed"
              pfp={require("./images/Irene.jpg")}
              background={require("./images/Wellplayed.jpg")}
            />
              </Link>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Discoverpage;
