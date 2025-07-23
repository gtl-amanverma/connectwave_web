import React from "react";
import ErrorBoundaryPage from "../../../../pages/error/page";
import { useLoginPageContext } from "../../../../contexts/sub_context/public/login_context";
import LoginIllustration from "../../../../assets/illustrations/login_illustration/login_illustration";
import LoginTemplate from "../../../../templates/public/login_template/template";

const LoginLayout = () => {
  const { isMobile, navigate } = useLoginPageContext();

  return (
    <ErrorBoundaryPage>
      <div className="w-screen h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="w-full h-full animate-slideFromLeft p-4 flex items-center justify-center">
          <LoginTemplate navigate={navigate} />
        </div>
        {!isMobile && (
          <div className="w-full h-full p-4 flex flex-col items-center justify-center animate-slideFromRight">
            <div className="w-full md:w-1/2">
              <LoginIllustration />
            </div>
          </div>
        )}
      </div>
    </ErrorBoundaryPage>
  );
};

export default LoginLayout;
