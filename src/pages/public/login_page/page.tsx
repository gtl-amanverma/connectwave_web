import React from "react";
import LoginIllustration from "../../../assets/illustrations/login_illustration/login_illustration";
import { useIsMobile } from "../../../hooks/use_mobile";

const LoginPage = () => {
  const isMobile = useIsMobile();

  console.log(isMobile);
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden">
      <div className="w-full h-full animate-slideFromLeft p-4 flex items-center justify-center">
        <div className="border-[3px] border-dashed w-full h-full md:w-1/2 md:h-1/2 rounded-3xl flex flex-col items-start justify-start p-6 md:p-8">
          <div className="w-full">
            <h1 className="text-4xl font-regular text-white mb-4">
              Welcome back,
            </h1>
            <p className="text-sm font-light text-white">
              This is description of login system. This is description of login
              system.
            </p>
          </div>
        </div>
      </div>
      {!isMobile && (
        <div className="w-full h-full p-4 flex flex-col items-center justify-center animate-slideFromRight">
          <div className="w-full md:w-1/2">
            <LoginIllustration />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
