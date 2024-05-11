import React from "react";
import demo from "../../assets/demo.jpg";
import searchIcon from "../../assets/search.png";

const AppHeader = () => {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-gradient-to-b from-primary to-searchColor text-white">
      <div className="flex items-center">
        <img src={demo} alt="avatar" className="w-10 h-10 rounded-full" />
        <h2 className="ml-2 text-lg font-semibold">John</h2>
      </div>
      <div className="flex items-center bg-searchColor rounded-lg p-2">
        <input
          type="text"
          placeholder="Search messages..."
          className="bg-transparent focus:outline-none text-blue-800 flex-1"
        />
        <img src={searchIcon} alt="searchIcon" className="w-5 h-5" />
      </div>
    </header>
  );
};

export default AppHeader;
