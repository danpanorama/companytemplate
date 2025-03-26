import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import "../css/nav.css";
import NotFound from "../pages/NotFound";
import HomeScreen from "../pages/HomeScreen";



function NavRouter() {
  return (
    <div className="">
      <div className="position-sticky navBarContainer">
        <NavBar />
      </div>
 
      <Routes>  
      <Route path="/" element={<HomeScreen />} exact />
      <Route path="*" element={<NotFound />} exact />
      </Routes>
    </div>
  );
}

export default NavRouter;