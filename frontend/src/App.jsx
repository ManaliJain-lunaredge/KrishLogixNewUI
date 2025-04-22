import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Pages/Header";
import Footer from "./Components/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
