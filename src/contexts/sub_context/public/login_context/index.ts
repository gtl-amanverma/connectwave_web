import { createContext, useContext } from "react";

type TLoginPageContext = {
  isMobile: boolean;
};

const LoginPageContext = createContext<TLoginPageContext>({
  isMobile: false,
});

export default LoginPageContext;
export const useLoginPageContext = () => useContext(LoginPageContext);
