import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faClockRotateLeft, faRightFromBracket, faToggleOn, faToggleOff, faExclamationTriangle, faBell } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  const handleToggleNotifications = () => {
    setIsNotificationsEnabled(!isNotificationsEnabled);
  };

  const handleLogoutClick = () => {
    navigate('/');
  };

  const handleHomeClick = () => {
    navigate('/home');
  };

  const handleHistoryClick = () => {
    navigate('/history');
  };

  const isPathActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    let interval;
    let isRedBackground = true; // Flag to toggle between red and yellow backgrounds
  
    if (isNotificationsEnabled) {
      interval = setInterval(() => {
        const backgroundColor = isRedBackground ? 'red' : 'yellow';
        const textColor = isRedBackground ? 'white' : 'black';
  
        const toastContent = (
          <div style={{ color: textColor }}> {/* Dynamic text color */}
            <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: textColor }} />
            {' Demo toggle is now ON'}
          </div>
        );
  
        toast(toastContent, {
          style: { backgroundColor: backgroundColor },
        });
  
        isRedBackground = !isRedBackground; // Toggle background color flag
      }, 2000);
    }
  
    return () => clearInterval(interval);
  }, [isNotificationsEnabled]);
  
  
  
  
  

  return (
    <div className="w-48 bg-gradient-custom text-white flex flex-col justify-between">
      <ToastContainer position="top-right" />

      <div>
        <div className="flex justify-center mt-7">
          <img
            src="/profile.png"
            alt="Profile"
            className="rounded-full h-32 w-32 object-cover"
          />
        </div>
        <div className="flex justify-center mt-6">
          <div className='bg-white w-2/3 h-1'></div>
        </div>
      </div>

      <div className="flex justify-center mt-2">
        <FontAwesomeIcon
          icon={faHouse}
          className={`h-16 w-14 cursor-pointer ${isPathActive('/home') ? 'text-white bg-[#3C3693] px-3 py-2 rounded-xl' : 'text-white px-3 py-2 hover:text-black'}`}
          onClick={handleHomeClick}
        />
      </div>

      <div className="flex justify-center mt-2">
        <FontAwesomeIcon
          icon={faClockRotateLeft}
          className={`h-16 w-14 cursor-pointer ${isPathActive('/history') ? 'text-white bg-[#3C3693] px-3 py-2 rounded-xl' : 'text-white px-3 py-2 hover:text-black'}`}
          onClick={handleHistoryClick}
        />
      </div>

      <div className="flex justify-center mt-2">
        {isNotificationsEnabled ? (
          <FontAwesomeIcon
            icon={faToggleOn}
            className="h-16 w-14 cursor-pointer text-green-500 rounded-full"
            onClick={handleToggleNotifications}
          />
        ) : (
          <FontAwesomeIcon
            icon={faToggleOff}
            className="h-16 w-14 cursor-pointer text-[#F33132] rounded-full"
            onClick={handleToggleNotifications}
          />
        )}
      </div>

      <div className="flex justify-center mb-9">
        <FontAwesomeIcon
          icon={faRightFromBracket}
          className='h-16 w-14 text-[#4F45D9] rounded-full px-3 py-2 bg-white hover:text-white hover:bg-black cursor-pointer'
          onClick={handleLogoutClick}
        />
      </div>
    </div>
  );
}

export default HomePage;
