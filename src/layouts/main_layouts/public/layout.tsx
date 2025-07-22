import React from "react";
import { Outlet } from "react-router-dom";
import PublicContext from "../../../contexts/main_context/public";

const PublicMainLayout = () => {
  return (
    <PublicContext.Provider value={{ data: "Authenticated Data" }}>
      <div className="w-full h-[calc(100vh-90px)]">
        <Outlet />
      </div>
    </PublicContext.Provider>
  );
};

export default PublicMainLayout;
