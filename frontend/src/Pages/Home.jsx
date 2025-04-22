import React from "react";
import About from "../Components/About";
import Tomorrow from "../Components/Tomorrow";
import Deliver from "../Components/Deliver";
import Team from "../Components/Team";
import Contact from "../Components/Contact";
import Client from "../Components/Client";
import Blogs from "../Components/Blogs";
import Loop from "../Components/Loop";
import Cost from "../Components/Cost";
import Hero from "./Hero";


const Home = () => {
  return (
    <>
      <div id="home" className="overflow-hidden">
       
        <Hero/>
        <About />
        <Cost />
        <Loop />
        <Tomorrow />
        <Deliver />
        <Team />
        <Contact />
        <Client />
        <Blogs />
       
      </div>
    </>
  );
};

export default Home;
