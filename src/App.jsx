import { Outlet} from "react-router-dom";

import Header from "./Pages/Header";
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
