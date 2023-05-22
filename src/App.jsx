import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import { Route,Routes } from "react-router-dom";
import Navigationbar from "./components/navigation-bar/navigation-bar"
function App() {
  return (
    <div>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>

      </Routes>

    </div>
  );
}

export default App;
