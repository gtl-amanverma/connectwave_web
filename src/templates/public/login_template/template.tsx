import React from "react";
import CustomLabel from "../../../components/label/component";
import CustomButton from "../../../components/button/component";
import ForgotRememberComponent from "./components/forgot_remember";
import LoginFormComponent from "./components/login_form";

type props = {
  navigate: Function;
};

const LoginTemplate = ({ ...props }: props) => {
  return (
    <div className="border-[3px] border-dashed border-border w-full md:max-w-[60%] rounded-3xl flex flex-col items-start justify-start p-6 md:p-8">
      <div className="w-full mb-5">
        <CustomLabel className="text-4xl font-regular mb-4">
          Welcome back,
        </CustomLabel>
        <CustomLabel className="text-sm font-normal">
          This is description of login system. This is description of login
          system.
        </CustomLabel>
      </div>
      <div className="w-full">
        <LoginFormComponent />
      </div>
      <div className="w-full">
        <ForgotRememberComponent />
      </div>

      <div className="w-full flex flex-row flex-wrap items-center justify-center gap-4 mb-8">
        <CustomButton className="bg-btnBackground">Login</CustomButton>
      </div>
      <div className="w-full flex items-center justify-center gap-2 mb-8">
        <div className="w-full border-2 rounded-lg" />
        <CustomLabel className="text-foreground flex-shrink-0">
          Don't have account?
        </CustomLabel>
        <div className="w-full border-2 rounded-lg" />
      </div>
      <div className="w-full flex flex-row flex-wrap items-center justify-center gap-4 mb-8">
        <CustomButton onClick={() => props.navigate("/public/user/register")} className="bg-btnBackground">
          Register Here...
        </CustomButton>
      </div>
    </div>
  );
};

export default LoginTemplate;
