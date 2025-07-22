import { Outlet } from "react-router-dom";

const InnerContent = () => {
  return (
    <div className="w-full h-full">
      <Outlet />
    </div>
  );
};

export default InnerContent;