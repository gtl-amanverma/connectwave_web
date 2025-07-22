import React from "react";
import ErrorBoundaryPage from "../../../../pages/error/page";
import CustomInput from "../../../../components/input/component";
import { useLoginPageContext } from "../../../../contexts/sub_context/public/login_context";
import LoginIllustration from "../../../../assets/illustrations/login_illustration/login_illustration";
import CustomLabel from "../../../../components/label/component";

const LoginLayout = () => {
  const { isMobile } = useLoginPageContext();

  return (
    <ErrorBoundaryPage>
      <div className="w-screen h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="w-full h-full animate-slideFromLeft p-4 flex items-center justify-center">
          <div className="border-[3px] border-dashed w-full md:max-w-[60%] rounded-3xl flex flex-col items-start justify-start p-6 md:p-8">
            <div className="w-full mb-5">
              <h1 className="text-4xl font-regular text-white mb-4">
                Welcome back,
              </h1>
              <p className="text-sm font-light text-white">
                This is description of login system. This is description of
                login system.
              </p>
            </div>

            <div className="w-full flex flex-col gap-4 mb-5">
              <CustomInput
                title="Email Address:"
                placeholder="example@example.com"
                type="email"
              />
              <CustomInput
                title="Password:"
                placeholder="********"
                type="password"
              />
            </div>
            <div className="w-full flex flex-row flex-wrap items-center justify-between gap-4">
              <CustomLabel className="text-white cursor-pointer">Remember me!</CustomLabel>
              <CustomLabel className="text-white cursor-pointer flex-shrink-0">Forgot password?</CustomLabel>
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
    </ErrorBoundaryPage>
  );
};

export default LoginLayout;
