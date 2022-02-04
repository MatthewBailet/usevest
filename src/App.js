import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Dashboardpage from "./pages/Dashboard";
import MapPage from "./pages/Map";
import Discoverpage from "./pages/Discover";
import MessengerPage from "./pages/Messenger";
import MHA1Xi from "./pages/MHA1Xi";

import "./index.css";
import Landingpage from "./pages/landing/landing";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Landingpage />} />
        <Route path="*" element={<Landingpage />} />
        <Route path="/" element={<Navbar />}>
          <Route path="Discover" element={<Discoverpage />} />
          <Route path="Investments" element={<Dashboardpage />} />
          <Route path="Map" element={<MapPage />} />
          <Route path="MessengerPage" element={<MessengerPage />} />
          <Route path="MHA1Xi" element={<MHA1Xi />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}

        </Route>
      </Routes>
    </div>
  );
}

export default App;
