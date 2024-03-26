import { Link } from "react-router-dom";
import darkModeLogo from "../assets/dark.png";
import lightModeLogo from "../assets/light.png";
import { useState } from "react";
const NavBar = ({ handleShow }) => {
  const [themeMode, setThemeMode] = useState("light");
  return (
    <nav className="flex space-x-2 bg-[#03a1ef] px-4 py-2 ">
      <div className="mr-auto items-center">
        <Link
          className="tracking-wider font-bold text-white text-xl hover:text-gray-100"
          to={"/"}
        >
          FeedBook
        </Link>
      </div>
      <div className="flex space-x-3 items-center">
        <img
          src={themeMode === "light" ? darkModeLogo : lightModeLogo}
          alt=""
          onClick={
            themeMode === "light"
              ? () => setThemeMode("dark")
              : () => setThemeMode("light")
          }
          className="w-[24px] h-[24px] cursor-pointer"
        />
        <button
          className=" text-white px-4 py-1 border border-white rounded-md text-base hover:text-blue-100"
          onClick={() => handleShow(true)}
        >
          Login
        </button>
      </div>
    </nav>
  );
};
export default NavBar;
