import React from "react";
import { IoIosAttach } from "react-icons/io";

const ChatProviders = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">John: Hi</h2>
      </div>
      <div className="flex items-center bg-gray-100 rounded-full py-2 px-4 focus-within:ring focus-within:ring-blue-200">
        <input
          type="text"
          placeholder="Type your message"
          className="flex-1 bg-transparent focus:outline-none"
        />
        <IoIosAttach className="text-gray-600 cursor-pointer ml-2" />
      </div>
      <button className="block mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
        Send
      </button>
    </div>
  );
};

export default ChatProviders;
