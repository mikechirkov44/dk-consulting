import {Route, Routes} from "react-router";
import {MainPage} from "./pages/Mainpage";
import {About} from "./pages/About";
import {Info} from "./pages/Info";
import {Services} from "./pages/Services";
import { Privacy } from "./pages/Privacy";
import PasswordReset from "./pages/PasswordReset";
import PasswordResetConfirm from "./pages/PasswordResetConfirm";

function App() {

  //localStorage.clear()

  return (
   <Routes>
        <Route path="/" element={<MainPage  />}></Route>
        <Route path="/info" element={<Info  />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/:block" element={<MainPage />}></Route>
        <Route path="/services/:service" element={<Services />}></Route>
        <Route path="/privacy-policy" element={<Privacy/>}></Route>
        <Route path="/reset-password" element={<PasswordReset />}></Route>
        <Route path="/api/password_reset/confirm/:token" element={<PasswordResetConfirm />}></Route>
   </Routes>
  );
}

export default App;
