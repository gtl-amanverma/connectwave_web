import React from "react";
import LoginPage from "../../../pages/public/login_page/page";
import LoginPageContext from "../../../contexts/sub_context/public/login_context";
import { useIsMobile } from "../../../hooks/use_mobile";
import useCustomNavigate from "../../../hooks/use_navigate";

const LoginProvider = () => {
  const isMobile = useIsMobile();
  const navigate = useCustomNavigate();
  return (
    <LoginPageContext.Provider value={{ isMobile, navigate }}>
      <LoginPage />
    </LoginPageContext.Provider>
  );
};

export default LoginProvider;
