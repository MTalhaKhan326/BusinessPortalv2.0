// src/Sidebar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppImages from "../assets/images";

function Sidebar() {
  const location = useLocation();

  const options = [
    { text: "Dashboard", path: "/" },
    { text: "Analysis", path: "/analysis" },
    { text: "Offers", path: "/offers" },
    { text: "Request", path: "/request" },
  ];

  return (
    <div className="shadow-sm bg-white min-h-screen flex-[1_1_20%] h-[100%] mx-4 my-3">
      <div className="flex flex-col items-center space-y-2 py-8 px-4 ">
        <div className="w-[72px] h-[72px]">
          <img src={AppImages.onecall} alt="" srcset="" />
        </div>
      </div>
      <ul>
        {options.map((option) => (
          <li
            key={option.text}
            className={`flex flex-col space-y-2 py-4 px-8 rounded-lg cursor-pointer ${
              location.pathname === option.path
                ? "bg-[#24ACE3] bg-opacity-10  text-[#353535] text-[18px]"
                : "text-gray-600"
            }`}
          >
            <Link to={option.path}>{option.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
