import Navbar from './layout/Navbar';
import Intro from "./layout/Intro";
import Team from "./layout/Team";
import Static from "./layout/Static";
import Service from "./layout/Service";
import Devices from "./layout/Devices";
import Wedo from "./layout/Wedo";
import Reviews from "./layout/Reviews";
import Card from "./layout/Card";
import Logos from "./layout/Logos";
import Works from "./layout/Works";
import Reviews2 from "./layout/Reviews2";
import Clients from "./layout/Clients";
import Blog from "./layout/Blog";
import Map from "./layout/Map";
import Footer from "./layout/Footer";

import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Team/>
        <Static/>
        <Service/>
        <Devices/>
        <Wedo/>
        <Reviews/>
        <Card/>
        <Logos/>
        <Works/>
        <Reviews2/>
        <Clients/>
        <Blog/>
        <Map/>
        <Footer/>
    </div>
  );
}

export default App;
