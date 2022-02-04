import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Dashboardpage from "./pages/Dashboard";
import MapPage from "./pages/Map";
import Discoverpage from "./pages/Discover";
import MessengerPage from "./pages/Messenger";
import MHA1Xi from "./pages/MHA1Xi";
import SHA5Xi from "./pages/SHA5Xi";
import JPF5SXi from "./pages/JPF5SXi";
import UIOPX6 from "./pages/UIOPX6";
import NYJHX7 from "./pages/NYJHX7";
import POFU8F from "./pages/POFU8F"
import HIB5FX from "./pages/HIB5FX";
import FFST6V from "./pages/FFST6V";
import RUTA5X from "./pages/RUTA5X";

import "./index.css";
import Landingpage from "./pages/landing/landing";
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';



function App() {
  

  document.title = "Vest"
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
          <Route path="SHA5Xi" element={<SHA5Xi />} />
          <Route path="JPF5SXi" element={<JPF5SXi />} />
          <Route path="UIOPX6" element={<UIOPX6 />} />
          <Route path ="NYJHX7" element ={<NYJHX7/>}/>
          <Route path ="POFU8F" element ={<POFU8F/>}/>
          <Route path ="HIB5FX" element ={<HIB5FX/>}/>
          <Route path ="FFST6V" element ={<FFST6V/>}/>
          <Route path ="RUTA5X" element ={<RUTA5X />}/>


          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}

        </Route>
      </Routes>
    </div>
  );
}

export default App;
