import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';


const Layout = () => {
  return (
    <div className="flex">
      {/* Left Sidebar - NavBar */}
      <NavBar />
      
      {/* Main Content - This will change based on the route */}
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
