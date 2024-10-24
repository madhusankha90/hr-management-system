import React from 'react';

const Header = ({title}) => {
  return (
    <div className="h-[8vh] min-h-[3rem] w-full p-4 flex justify-between items-center font-primary" style={{ backgroundColor: '#00961C' }}>
      <div className="text-white font-semibold">{title}</div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="w-64 p-2 rounded-lg border border-white bg-white text-sm"
        />
        <button className="text-white p-2 border border-black rounded-xl">
          <span className="material-icons">search</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
