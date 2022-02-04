import "./stylet.css";

import { useEffect } from "react";

function Landingpage() {
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
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Vest</title>
      <link rel="stylesheet" href="style.css" />
      <div className="topnav">
        <div className="centered">
          <a href="#home">Home</a>
          <a href="#aboutplease">About</a>
          <a href="#theteam">Team</a>
          <a href="https://www.boltbootcamps.com/events/the-future-of-fintech">
            BOLT 2022
          </a>
        </div>
        <a href="/Discover" className="login">
          Log-in <ion-icon name="chevron-forward-outline" className="Chairtester"></ion-icon>
        </a>
      </div>
      <container>
        <div className="hero">
          <div className="parent flex-parent">
            <div className="child flex-child">
              <img src={require("./images/vestlogo.png")} className="logot" />
              <h2 className="header2">
                <span className="spanning">Test </span>
                <span className="spanning">for </span>
                <span className="spanning">where </span>
                <span className="spanning">slogan </span>
                <span className="spanning">will</span>
                <span className="spanning">evntually</span>
                <span className="spanning">be</span>
                <span className="spanning">going.</span>
              </h2>
              <a href="index.html">
                <div className="getstarted">Get started <ion-icon name="chevron-forward-outline"></ion-icon></div>
              </a>
            </div>
            <div className="child flex-child">
              <img src={require("./images/memphis.png")} className="memphis" />
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ marginTop: "-1px" }}
        >
          <path
            fill="#0075FF"
            fillOpacity={1}
            d="M0,96L120,96C240,96,480,96,720,85.3C960,75,1200,53,1320,42.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          />
        </svg>
        <a href="#parentabt">
          <div className="down-arrow" />
        </a>
      </container>
      <container>
        <div className="parentabt" id="parentabt">
          <div className="div1abt">
            <h2 className="header3"> <ion-icon name="chatbubbles-outline" className="landingicon"></ion-icon>    Connect</h2>
            <p
                className="peter peter2 peter3" >
                Find a dynamic team
              </p>
          </div>
          <div className="div2abt">
            <h2 className="header3"><ion-icon name="layers-outline" className="landingicon"></ion-icon>    Compliment</h2>
            <p
                className="peter peter2 peter3" >
                Benefit from synergies 
              </p>
          </div>
          <div className="div3abt">
          <h2 className="header3"><ion-icon name="trending-up-outline" className="landingicon"></ion-icon>  Grow</h2>
          <p
                className="peter peter2 peter3" >
                Reap the rewards 
              </p>
          </div>
          <div className="div4abt aboutsection">
            <h1 className="headerone" id="aboutplease">
              What is{" "}
              <span style={{ color: "rgba(0, 117, 255, 1)" }}>Vest?</span>
            </h1>
            <span>
              <p className="peter">
                At Vest, we understand the many elements that form a successful
                business team. We’ve seen thousands of ideas that never see the
                light of day because they don’t find the proper investors. We
                understand that entrepreneurs need more than just capital.
              </p>
            </span>
            <span>
              <p className="peter">
                That’s why we’re bringing together investors and entrepreneurs
                to cultivate effective partnerships that will make it across the
                finish line. Our proprietary Match Score highlights synergies
                between investors and ideas to improve decision making.
              </p>
            </span>
          </div>
          <div className="div5abt">
            <img src={require("./images/rightsidepanel.png")} className="rsp" />
          </div>
        </div>
        <div className="contentblockb">
          <div className="parentb">
            <div className="div1b">
              <h2
                className="header2"
                style={{ padding: "50px", color: "rgb(41, 41, 41)" }}
              >
               <ion-icon name="wallet-outline"></ion-icon> Investors
              </h2>
              <p
                className="peter peter2"
                style={{
                  paddingLeft: "50px !important",
                  paddingRight: "50px",
                  marginTop: "-20px",
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                ipsam expedita cum ullam tenetur quis quas, error necessitatibus
                perferendis.
              </p>
            </div>
            <div className="div2b">
              <h2
                className="header2"
                style={{ padding: "50px", color: "rgb(41, 41, 41)" }}
              >
              <ion-icon name="person-outline"></ion-icon>  Entrepeneurs
              </h2>
              <p
                className="peter peter2"
                style={{
                  paddingLeft: "50px !important",
                  paddingRight: "50px",
                  marginTop: "-20px",
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                ipsam expedita cum ullam tenetur quis quas, error necessitatibus
                perferendis.
              </p>
            </div>
          </div>
        </div>
        <div className="contentblock" id="theteam">
          <h1
            className="headerone"
            style={{
              textAlign: "center",
              padding: "60px",
              color: "rgba(0, 117, 255, 1)",
            }}
          >
            Our Team
          </h1>
          <div className="parenttt">
            <div className="div1tt">
              <img src={require("./images/stew.png")} className="stew" />
              <h2
                className="header2 header5"
                style={{
                  padding: "0 !important",
                  textAlign: "center",
                  marginTop: "10px",
                  color: "rgb(27, 27, 27)",
                }}
              >
                Ryan Stewart
              </h2>
              <h2
                className="header2 header6"
                style={{
                  padding: "0 !important",
                  textAlign: "center",
                  marginTop: "0px",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "rgb(58, 58, 58)",
                }}
              >
                Statistics
              </h2>
              <p
                className="peter  peter4"
                style={{
                  width: "100%",
                  padding: "10px !important",
                  fontSize: "13px",
                  paddingBottom: "50px",
                  paddingRight: "10px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita est labore, velit doloribus
              </p>
            </div>
            <div className="div2tt">
              <img src={require("./images/murray.png")} className="stew" />
              <h2
                className="header2 header5"
                style={{
                  padding: "0 !important",
                  textAlign: "center",
                  marginTop: "10px",
                  color: "rgb(27, 27, 27)",
                }}
              >
                Ryan Murray
              </h2>
              <h2
                className="header2 header6"
                style={{
                  padding: "0 !important",
                  textAlign: "center",
                  marginTop: "0px",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "rgb(58, 58, 58)",
                }}
              >
                Finance
              </h2>
              <p
                className="peter  peter4"
                style={{
                  width: "100%",
                  padding: "10px !important",
                  fontSize: "13px",
                  paddingBottom: "50px",
                  paddingRight: "10px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita est labore, velit doloribus
              </p>
            </div>
            <div className="div3tt">
              <img src={require("./images/Cordabo.png")} className="stew" />
              <h2
                className="header2 header5"
                style={{
                  padding: "0 !important",
                  textAlign: "center",
                  marginTop: "10px",
                  color: "rgb(27, 27, 27)",
                }}
              >
                Mateo Cordoba
              </h2>
              <h2
                className="header2 header6"
                style={{
                  padding: "0 !important",
                  textAlign: "center",
                  marginTop: "0px",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "rgb(58, 58, 58)",
                }}
              >
                Finance
              </h2>
              <p
                className="peter  peter4 "
                style={{
                  width: "100%",
                  padding: "10px !important",
                  fontSize: "13px",
                  paddingBottom: "50px",
                  paddingRight: "10px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita est labore, velit doloribus
              </p>
            </div>
            <div className="div4tt">
              <img src={require("./images/bailet.png")} className="stew" />
              <h2
                className="header2 header5"
                style={{
                  padding: "0 !important",
                  textAlign: "center",
                  marginTop: "10px",
                  color: "rgb(27, 27, 27)",
                }}
              >
                Matthew Bailet
              </h2>
              <h2
                className="header2 header6"
                style={{
                  padding: "0 !important",
                  textAlign: "center",
                  marginTop: "0px",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "rgb(58, 58, 58)",
                }}
              >
                Comp Sci
              </h2>
              <p
                className="peter peter4"
                style={{
                  width: "100%",
                  padding: "10px !important",
                  fontSize: "13px",
                  paddingBottom: "50px",
                  paddingRight: "10px",
                }}
              >
                Building Vest has been one of the most education and interesting experiences of my life, allowing me express my
                passion for both design and building things.
              </p>
            </div>
          </div>
        </div>
        <div className="contentblock2">
          <img
            src={require("./images/footerlogo.png")}
            className="footerlogo"
          />
        </div>
      </container>
    </div>
  );
}

export default Landingpage;
