import React from "react";
import About from "../Components/About";
import Tomorrow from "./Tomorrow";
import Deliver from "./Deliver";
import Team from "./Team";
import Contact from "./Contact";
import Client from "./Client";
import Insights from "./Insights";
import Footer from "./Footer";
import Loop from "./Loop";
import Cost from "./Cost";

const Home = () => {
  return (
    <>
      <div id="home">
        <About />
        <Cost />
        <Loop />
        <Tomorrow />
        <Deliver />
        <Team />
        <Contact />
        <Client />
        <Insights />
        <Footer />
      </div>
    </>
  );
};

export default Home;
