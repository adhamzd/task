import "./App.css";
import DineIn from "./components/DineIn/DineIn";
import Events from "./components/Events/Events";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Highlights from "./components/Highlights/Highlights";
import Offering from "./components/Offering/Offering";
import Video from "./components/Video/Video";

import { DarkmodeProvider } from "../src/Darkmode/Darkmode";

function App() {
  return (
    <div className="App">
      <DarkmodeProvider>
        <Hero />
        <Highlights />
        <Video />
        <Offering />
        <DineIn />
        <Experience />
        <Events />
        <Footer />
      </DarkmodeProvider>
    </div>
  );
}

export default App;
