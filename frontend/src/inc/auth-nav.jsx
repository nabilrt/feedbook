import { Link, useNavigate } from "react-router-dom";
import notificationBell from "../assets/notification.png";
import darkModeLogo from "../assets/dark.png";
import lightModeLogo from "../assets/light.png";
import { useState } from "react";

const AuthNavBar = ({ user }) => {
  const navigate = useNavigate();
  const [themeMode, setThemeMode] = useState("light");
  return (
    <nav className="flex space-x-2 bg-[#03a1ef] px-4 py-2 items-center">
      <div className="mr-auto items-center">
        <Link
          className="tracking-wider font-bold text-white text-xl hover:text-gray-100"
          to={"/feed"}
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
        <img
          src={notificationBell}
          alt=""
          height={24}
          width={24}
          className="cursor-pointer"
        />
        <div className="flex space-x-2 border rounded-md px-2 py-2 items-center cursor-pointer">
          <img src={user.avatar} alt="" height={25} width={25} />
          <p className="text-white text-sm text-center">Hello, {user.name} </p>
        </div>
        <button
          className=" text-white px-4 py-1 border border-white rounded-md text-base hover:text-blue-100"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
export default AuthNavBar;
