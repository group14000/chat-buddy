import React from "react";
import brandLogo from "../../assets/brandlogo.svg";
import searchIcon from "../../assets/search.png";
import demo from "../../assets/demo.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" bg-gradient-to-b from-primary to-searchColor h-screen w-64 flex flex-col justify-between">
      {/* Logo and Search */}
      <div className="p-4">
        <img src={brandLogo} alt="brandLogo" className="h-8 w-auto mb-4" />
        <div className="flex items-center bg-searchColor rounded-lg p-2">
          <input
            type="text"
            placeholder="Search name..."
            className="bg-transparent focus:outline-none text-blue-800 flex-1"
          />
          <img src={searchIcon} alt="searchIcon" className="w-5 h-5" />
        </div>
      </div>
      {/* User Information */}
      <div className="p-4">
        <div className="flex items-center mb-4">
          <img src={demo} alt="avatar" className="w-10 h-10 rounded-full" />
          <Link to="/chat">
            <h2 className="text-white ml-2">John</h2>
          </Link>
        </div>
        {/* Add more user info here */}
      </div>
    </div>
  );
};

export default Sidebar;
