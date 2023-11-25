import React from 'react';

function NavbarTop() {

  return (
        <div className="px-10 pt-10 flex">
          <input
            type="text"
            placeholder="Search Room/Resident"
            className="p-4 border rounded-full flex-grow max-w-xs" // Added max-w-xs for fixed width
          />
          <button className="bg-gradient-custom hover:bg-blue-700 text-white font-bold py-2 px-8 ml-4 rounded-full">
            All
          </button>
          <div className="text-black font-bold py-2 px-6 ml-4 rounded-full border-2 border-[#FB0000]">
            Critical
            <button className="bg-[#FB0000] hover:bg-blue-700 text-white font-bold py-2 px-6 ml-4 rounded-full">
              5
            </button>
          </div>
          <div className="text-black font-bold py-2 px-6 ml-4 rounded-full border-2 border-[#FDD12E]">
          Visit Needed
            <button className="bg-[#FDD12E] hover:bg-blue-700 text-white font-bold py-2 px-6 ml-4 rounded-full">
              13
            </button>
          </div>
          <div className="text-black font-bold py-2 px-6 ml-4 rounded-full border-2 border-[#4F45D9]">
            PaR
            <button className="bg-gradient-custom hover:bg-blue-700 text-white font-bold py-2 px-6 ml-4 rounded-full">
              13
            </button>
          </div>
        </div>
  );
}

export default NavbarTop;
