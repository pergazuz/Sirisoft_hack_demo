import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  const navigate = useNavigate(); // Create an instance of useNavigate
  const location = useLocation(); 

  const handleLogoutClick = () => {
    navigate('/'); // Navigate to the home page ('/')
  };

  const handleHomeClick = () => {
    navigate('/home'); // Navigate to the home page ('/')
  };

  const handleHistoryClick = () => {
    navigate('/history'); // Navigate to the home page ('/')
  };

  const isPathActive = (path) => {
    return location.pathname === path;
  };

  return (
      <div className="w-48 bg-gradient-custom text-white flex flex-col justify-between">
        <div>
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
        <div className="flex justify-center mt-2">
        <FontAwesomeIcon 
          icon={faHouse} 
          className={`h-16 w-14 cursor-pointer ${isPathActive('/home') ? 'text-white bg-[#3C3693] px-3 py-2 rounded-xl' : 'text-white px-3 py-2'}`} 
          onClick={handleHomeClick}
        />
      </div>
      <div className="flex justify-center mt-2">
        <FontAwesomeIcon 
          icon={faClockRotateLeft} 
          className={`h-16 w-14 cursor-pointer ${isPathActive('/history') ? 'text-white bg-[#3C3693] px-3 py-2 rounded-xl' : 'text-white px-3 py-2'}`} 
          onClick={handleHistoryClick} 
        />
      </div>
        <div className="flex justify-center mb-9">
          <img
            src="/Logout.png"
            alt="Logout"
            className="rounded-full h-20 w-20 object-cover cursor-pointer" // Added cursor-pointer for better UX
            onClick={handleLogoutClick} // Attach the click event handler
          />
        </div>
      </div>
  );
}

export default HomePage;
