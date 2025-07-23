import React from "react";
import CustomCheckbox from "../../../../components/checkbox/component";
import CustomLabel from "../../../../components/label/component";

const ForgotRememberComponent = () => {
  return (
    <div className="w-full flex flex-row flex-wrap items-center justify-between gap-4 mb-8">
      <CustomCheckbox text="Remember me" />
      <CustomLabel className="cursor-pointer flex-shrink-0">
        Forgot password?
      </CustomLabel>
    </div>
  );
};

export default ForgotRememberComponent;
