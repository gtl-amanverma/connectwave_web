import React from "react";
import LoginPage from "../../../pages/public/login_page/page";
import LoginPageContext from "../../../contexts/sub_context/public/login_context";
import { useIsMobile } from "../../../hooks/use_mobile";

const LoginProvider = () => {
  const isMobile = useIsMobile();
  return (
    <LoginPageContext.Provider value={{ isMobile }}>
      <LoginPage />
    </LoginPageContext.Provider>
  );
};

export default LoginProvider;
