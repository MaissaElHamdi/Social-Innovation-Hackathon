import Home from "./Home/Home";
import Agenda from "./Agenda/Agenda";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Speakers from "./Speakers/Speakers";
import Main from "./components/Main/Main";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

function App() {
  const user = localStorage.getItem("token");
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Agenda" element={<Agenda />} />
          <Route path="/Speakers" element={<Speakers />} />
          {user && <Route path="/Inscription" exact element={<Main />} />}
          <Route path="/Inscription" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
export default App;
