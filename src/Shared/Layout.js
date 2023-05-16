import React from "react";
import { Outlet } from "react-router-dom";
import Nav1 from "../components/Nav1";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
   
<>
<Nav1 className="" />
      <div className="inline-flex">
        <div>
          <div><Sidebar/></div>
        </div>
        <div className="pt-10">{<Outlet />}</div>
      </div>
</>
    
  );
};

export default Layout;
