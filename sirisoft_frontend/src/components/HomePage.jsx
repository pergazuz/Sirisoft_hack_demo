import React from 'react';
import HomeContent from './HomeContent'; // Import the HomeContent component
import { useNavigate } from 'react-router-dom'; 


function HomePage() {
  const navigate = useNavigate(); // Create an instance of useNavigate

  // Function to handle navigation on click
  const handleLogoutClick = () => {
    navigate('/'); // Navigate to the home page ('/')
  };
  return (
    <div className="flex h-screen">
      {/* Navigation Bar */}
      <div className="w-52 bg-gradient-custom text-white flex flex-col justify-between" style={{ height: '100vh' }}>
        <div>
          {/* Profile Image */}
          <div className="flex justify-center mt-7">
            <img
              src="/profile.png" // Replace with your image path
              alt="Profile"
              className="rounded-full h-32 w-32 object-cover" // Adjust size as needed
            />
          </div>
          <div className="flex justify-center mt-6">
            <div className='bg-white w-2/3 h-1'></div>
          </div>
        </div>
        <div className="flex justify-center mt-2"> {/* Adjust mt-2 to reduce the space */}
          <img
            src="/home_icon.png" // Replace with your image path
            alt="home_icon"
            className="rounded-xl h-20 w-20 object-cover" // Adjust size as needed
          />
        </div>
        <div className="flex justify-center mb-5">
        <img
          src="/Logout.png"
          alt="Logout"
          className="rounded-full h-20 w-20 object-cover cursor-pointer" // Added cursor-pointer for better UX
          onClick={handleLogoutClick} // Attach the click event handler
        />
      </div>
      </div>
      <div className="flex-1 flex flex-col bg-[#E3E3E3]">
        <div className="p-10 flex">
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
            Critical
            <button className="bg-[#FDD12E] hover:bg-blue-700 text-white font-bold py-2 px-6 ml-4 rounded-full">
              13
            </button>
          </div>
          <div className="text-black font-bold py-2 px-6 ml-4 rounded-full border-2 border-[#4F45D9]">
            Critical
            <button className="bg-gradient-custom hover:bg-blue-700 text-white font-bold py-2 px-6 ml-4 rounded-full">
              13
            </button>
          </div>
        </div>
        <HomeContent />
      </div>
    </div>
  );
}

export default HomePage;
