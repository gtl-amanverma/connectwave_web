import React from "react";
import CustomInput from "../../../../components/input/component";

const LoginFormComponent = () => {
  return (
    <div className="w-full flex flex-col gap-4 mb-5">
      <CustomInput
        title="Email Address:"
        placeholder="example@example.com"
        type="email"
      />
      <CustomInput title="Password:" placeholder="********" type="password" />
    </div>
  );
};

export default LoginFormComponent;
