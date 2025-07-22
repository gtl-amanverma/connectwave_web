import React from "react";
import { useNavigate } from "react-router-dom";

type props = {
  backBtn?: boolean;
  errorCode?: number;
  errorTitle?: string;
  errorDescription?: string;
};

const ErrorBoundaryComponent = ({ ...props }: props) => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-2">
      <div className="p-2 flex flex-col items-center justify-center">
        <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300 font-display text-center">
          {props.errorCode ?? `500`}
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2 font-display text-center">
          {props.errorTitle ?? `Something went wrong!`}
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-500 mt-5 text-center font-display">
          {props.errorDescription ??
            `Please contact with administrative department.`}
        </p>
      </div>
      {props.backBtn && (
        <div className="p-2 flex flex-col items-center justify-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-[#0d1b2a] text-white text-xs font-display p-4 rounded-xl"
          >
            Return back
          </button>
        </div>
      )}
    </div>
  );
};

export default ErrorBoundaryComponent;
