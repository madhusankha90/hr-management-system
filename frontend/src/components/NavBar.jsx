import React, { useState, useEffect } from 'react';
import w3inventor from '../imges/w3inventor.png';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const NavBar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard'); // Manage active state
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div className="bg-slate-100 flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-white border-r border-gray-200 relative">
        {/* Logo */}
        <div className="p-6">
          <img src={w3inventor} alt="Company Logo" className="h-8 mb-6" />
        </div>

        {/* Menu Items */}
        <ul className="space-y-4">
          <li
            className={`px-6 py-2 flex items-center cursor-pointer ${
              activeItem === 'Dashboard' ? 'bg-green-100 text-green-700' : 'text-black'
            } hover:bg-green-50`}
            onClick={() => setActiveItem('Dashboard')}
          >
            <HomeOutlinedIcon />
            <a href="#" className="ml-2">Dashboard</a>
          </li>
          <li
            className={`px-6 py-2 flex items-center cursor-pointer ${
              activeItem === 'Leave' ? 'bg-green-100 text-green-700' : 'text-black'
            } hover:bg-green-50`}
            onClick={() => setActiveItem('Leave')}
          >
            <ExitToAppOutlinedIcon />
            <a href="#" className="ml-2">Leave</a>
          </li>
          <li
            className={`px-6 py-2 flex items-center cursor-pointer ${
              activeItem === 'Time' ? 'bg-green-100 text-green-700' : 'text-black'
            } hover:bg-green-50`}
            onClick={() => setActiveItem('Time')}
          >
            <AccessTimeOutlinedIcon />
            <a href="#" className="ml-2">Time</a>
          </li>
          <li
            className={`px-6 py-2 flex items-center cursor-pointer ${
              activeItem === 'Performance' ? 'bg-green-100 text-green-700' : 'text-black'
            } hover:bg-green-50`}
            onClick={() => setActiveItem('Performance')}
          >
            <MilitaryTechOutlinedIcon />
            <a href="#" className="ml-2">Performance</a>
          </li>
          <li
            className={`px-6 py-2 flex items-center cursor-pointer ${
              activeItem === 'Location' ? 'bg-green-100 text-green-700' : 'text-black'
            } hover:bg-green-50`}
            onClick={() => setActiveItem('Location')}
          >
            <LocationOnOutlinedIcon />
            <a href="#" className="ml-2">Location</a>
          </li>
          <li
            className={`px-6 py-2 flex items-center cursor-pointer ${
              activeItem === 'Directory' ? 'bg-green-100 text-green-700' : 'text-black'
            } hover:bg-green-50`}
            onClick={() => setActiveItem('Directory')}
          >
            <ArticleOutlinedIcon />
            <a href="#" className="ml-2">Directory</a>
          </li>
          <li
            className={`px-6 py-2 flex items-center cursor-pointer ${
              activeItem === 'My Info' ? 'bg-green-100 text-green-700' : 'text-black'
            } hover:bg-green-50`}
            onClick={() => setActiveItem('My Info')}
          >
            <Person2OutlinedIcon />
            <a href="#" className="ml-2">My Info</a>
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

      {/* Main Content */}
      <div className="flex-grow">
        {/* Top Navbar */}
        <div className="p-4 flex justify-between items-center" style={{ backgroundColor: '#00961C' }}>
          <div className="text-white font-semibold">User Management</div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="w-64 p-2 rounded-lg border border-white bg-white text-sm"
            />
            <button className="text-white p-2 border border-black rounded-md">
              <span className="material-icons">search</span>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-10">
          {/* Add dashboard content here */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
