import React from "react";
import { Outlet } from "react-router-dom";
import PrivateContext from "../../../contexts/main_context/private";

const PrivateMainLayout = () => {
  return (
    <PrivateContext.Provider value={{ data: "Authenticated Data" }}>
      <div className="w-full h-[calc(100vh-90px)]">
        <Outlet />
      </div>
    </PrivateContext.Provider>
  );
};

export default PrivateMainLayout;
