

import { useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function Navbar(props) {
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>Sidebar sub menus</title>
      <div className="l-navbar" id="navbar">
        <nav className="nav">
          <div>
            <div className="nav__brand">
              <a href="/Discover" className="nav__logo">
                <img
                  className="logopic"
                  src={require("./images/vestlogo.png")}
                />
              </a>
            </div>
            <div className="nav__list">
              <Link to="Discover">
                <div className="nav__link collapse">
                  <ion-icon name="archive-outline" className="nav__icon" />
                  <span className="nav__name">Discover</span>
                </div>
              </Link>

              <Link to="/Investments">
                <a className="nav__link active">
                  <ion-icon name="home-outline" className="nav__icon" />
                  <span className="nav__name">Investments</span>
                </a>
              </Link>

              <Link to="/MessengerPage">
                <a className="nav__link">
                  <ion-icon name="chatbubbles-outline" className="nav__icon" />
                  <span className="nav__name">Messenger</span>
                </a>
              </Link>

            <Link to="/MapPage">
              <div className="nav__link collapse">
                <ion-icon name="map-outline" className="nav__icon" />
                <span className="nav__name">VestMap</span>
              </div>

            </Link>


              <div className="nav__link collapse">
                <ion-icon name="people-outline" className="nav__icon" />
                <span className="nav__name">Groups</span>
              </div>
              <a href="#" className="nav__link">
                <ion-icon name="settings-outline" className="nav__icon" />
                <span className="nav__name">Settings</span>
              </a>
            </div>
          </div>
          <a href="/" className="nav__link">
            <ion-icon name="log-out-outline" className="nav__icon" />
            <span className="nav__name">Log Out</span>
          </a>
        </nav>
      </div>

      <Outlet />
    </div>
  );
}

export default Navbar;
