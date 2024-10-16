import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import w3inventor from '../imges/w3inventor.png';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const SideMenu = () => {
  const [activeItem, setActiveItem] = useState(null); // Track active item
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  const handleNavClick = (item, route) => {
    setActiveItem(item);  // Set the active item
    navigate(route);      // Navigate to the route
  };

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 relative">
      {/* Logo */}
      <div className="p-6">
        <img src={w3inventor} alt="Company Logo" className="h-8 mb-6" />
      </div>

      {/* Menu Items */}
      <ul className="space-y-4">
        <li
          className={`px-6 py-2 flex items-center cursor-pointer hover:bg-green-50 ${activeItem === 'Dashboard' ? 'bg-green-100 text-green-700' : ''}`}
          onClick={() => handleNavClick('Dashboard', '/dashboard')}
        >
          <HomeOutlinedIcon />
          <span className="ml-2">Dashboard</span>
        </li>
        <li
          className={`px-6 py-2 flex items-center cursor-pointer hover:bg-green-50 ${activeItem === 'Leave' ? 'bg-green-100 text-green-700' : ''}`}
          onClick={() => handleNavClick('Leave', '/leave')}
        >
          <ExitToAppOutlinedIcon />
          <span className="ml-2">Leave</span>
        </li>
        <li
          className={`px-6 py-2 flex items-center cursor-pointer hover:bg-green-50 ${activeItem === 'Time' ? 'bg-green-100 text-green-700' : ''}`}
          onClick={() => handleNavClick('Time', '/time')}
        >
          <AccessTimeOutlinedIcon />
          <span className="ml-2">Time</span>
        </li>
        <li
          className={`px-6 py-2 flex items-center cursor-pointer hover:bg-green-50 ${activeItem === 'Performance' ? 'bg-green-100 text-green-700' : ''}`}
          onClick={() => handleNavClick('Performance', '/performance')}
        >
          <MilitaryTechOutlinedIcon />
          <span className="ml-2">Performance</span>
        </li>
        <li
          className={`px-6 py-2 flex items-center cursor-pointer hover:bg-green-50 ${activeItem === 'Location' ? 'bg-green-100 text-green-700' : ''}`}
          onClick={() => handleNavClick('Location', '/location')}
        >
          <LocationOnOutlinedIcon />
          <span className="ml-2">Location</span>
        </li>
        <li
          className={`px-6 py-2 flex items-center cursor-pointer hover:bg-green-50 ${activeItem === 'Directory' ? 'bg-green-100 text-green-700' : ''}`}
          onClick={() => handleNavClick('Directory', '/directory')}
        >
          <ArticleOutlinedIcon />
          <span className="ml-2">Directory</span>
        </li>
        <li
          className={`px-6 py-2 flex items-center cursor-pointer hover:bg-green-50 ${activeItem === 'My Info' ? 'bg-green-100 text-green-700' : ''}`}
          onClick={() => handleNavClick('My Info', '/myinfo')}
        >
          <Person2OutlinedIcon />
          <span className="ml-2">My Info</span>
        </li>
      </ul>

      {/* User Info */}
      <div className="absolute bottom-0 p-6 w-full">
        <div className="flex items-center">
          <img src="user-image.jpg" alt="User" className="h-10 w-10 rounded-full" />
          <div className="ml-4">
            <h4 className="text-sm font-semibold">Patrick Matshaba</h4>
            <p className="text-xs text-gray-500">CEO</p>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}<br />
          {currentTime.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
        </p>
      </div>
    </div>
  );
};

export default SideMenu;