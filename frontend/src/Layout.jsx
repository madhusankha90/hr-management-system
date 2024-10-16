import React from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="bg-slate-100 flex min-h-screen flex-col">
      <div className="flex-grow flex">
        <SideMenu />
        <div className="flex-grow">
          <Header />
          <div className="flex-grow">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
