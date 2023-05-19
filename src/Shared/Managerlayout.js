import React from "react";
import { Outlet } from "react-router-dom";
import Nav1 from "../components/Nav1";
import Managersidebar from "../components/Managersidebar";

const Managerlayout = () => {
  return (
   
<>
<Nav1 className="" />
      <div className="inline-flex">
        <div>
          <div><Managersidebar/></div>
        </div>
        <div className="pt-10">{<Outlet />}</div>
      </div>
</>
    
  );
};

export default Managerlayout;
