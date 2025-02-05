import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Cost from "../Components/Cost";

import Contact from "../Components/Contact";
import App from "../App";
import Services from "../Components/Services";
import Team from "../Components/Team";
import Blogs from "../Components/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // ✅ Use App as the layout wrapper
    children: [
      { path: "", element: <Home /> }, // Home page at "/"
      { path: "about", element: <About /> },
      { path: "cost", element: <Cost /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "career", element: <Team/> },
      { path: "blogs", element: <Blogs/> },
    ],
  },
]);
export default router