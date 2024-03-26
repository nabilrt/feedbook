import React, { useState } from "react";
import NavBar from "./inc/navbar";
import LandingHeroSection from "./components/landing-hero";
import LandingRegister from "./components/landing-register";
import LoginModal from "./modals/login-modal";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col min-h-screen font-[Inter]">
      <NavBar handleShow={setShow} />
      <div className="flex-grow px-4 flex justify-around ">
        <LandingHeroSection />
        <LandingRegister />
      </div>
      <div className="text-center mb-2 text-[#03a1ef]">
        © {new Date().getFullYear()} Feedbook. All rights reserved
      </div>
      <LoginModal show={show} handleClose={setShow} />
    </div>
  );
}

export default App;
