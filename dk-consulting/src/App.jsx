import {Route, Routes} from "react-router";
import {MainPage} from "./pages/Mainpage";
import {About} from "./pages/About";
import {Info} from "./pages/Info";
import {Services} from "./pages/Services";
import { Privacy } from "./pages/Privacy";

function App() {
  return (
   <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/info" element={<Info />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/:block" element={<MainPage />}></Route>
        <Route path="/services/:service" element={<Services/>}></Route>
        <Route path="/privacy-policy" element={<Privacy/>}></Route>
   </Routes>
  );
}

export default App;
