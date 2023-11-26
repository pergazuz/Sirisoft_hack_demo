import React from 'react';

function NavbarTop({ onFilterChange }) {


  const handleCriticalClick = () => {
    if (typeof onFilterChange === 'function') {
      onFilterChange('critical');
    }
  };

  const handleAllClick = () => {
    onFilterChange('all');
  };

  const handleVisitNeededClick = () => {
    onFilterChange('visitNeeded');
  };

  const handlePaRClick = () => {
    onFilterChange('par');
  };

  return (
    <div className="px-10 pt-10 flex">
      <input
        type="text"
        placeholder="Search Room/Resident"
        className="p-4 border rounded-full flex-grow max-w-xs" // Added max-w-xs for fixed width
      />
      <button onClick={handleAllClick} className="bg-gradient-custom hover:bg-blue-700 text-white font-bold py-2 px-8 ml-4 rounded-full">
        All
      </button>
      <div className="text-black font-bold py-2 px-6 ml-4 rounded-full border-2 border-[#FB0000] hover:bg-[#FB0000] hover:text-white cursor-pointer" onClick={handleCriticalClick}>
        Critical
        <button className="bg-[#FB0000] hover:bg-[#FB0000]] text-white font-bold py-2 px-6 ml-4 rounded-full">
          3
        </button>
      </div>
      <div className="text-black font-bold py-2 px-6 ml-4 rounded-full border-2 border-[#FDD12E] hover:bg-[#FDD12E] hover:text-white cursor-pointer" onClick={handleVisitNeededClick}>
        Visit Needed
        <button className="bg-[#FDD12E] hover:bg-[#FDD12E] text-white font-bold py-2 px-6 ml-4 rounded-full">
          2
        </button>
      </div>
      <div className="text-black font-bold py-2 px-6 ml-4 rounded-full border-2 border-[#4F45D9] hover:bg-[#4F45D9] hover:text-white cursor-pointer" onClick={handlePaRClick}>
        PaR
        <button className="bg-gradient-custom hover:bg-blue-700 text-white font-bold py-2 px-6 ml-4 rounded-full">
          2
        </button>
      </div>
    </div>
  );
}

export default NavbarTop;
