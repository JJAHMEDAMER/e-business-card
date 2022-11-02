import React from "react";

// Comp
import Footer from "./comp/footer";
import HeroPhoto from "./comp/hero-photo";
import Body from "./comp/body";

const App = () => (
  <div className="e-card">
    <HeroPhoto />
    <Body />
    <Footer />
  </div>
);

export default App;
