import React from "react";
import About from "../Components/About";
import Tomorrow from "./Tomorrow";
import Deliver from "./Deliver";
import Team from "./Team";
import Contact from "./Contact";
import Client from "./Client";
import Blogs from "./Blogs";
import Loop from "./Loop";
import Cost from "./Cost";
import Hero from "../Pages/Hero";


const Home = () => {
  return (
    <>
      <div id="home">
       
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
