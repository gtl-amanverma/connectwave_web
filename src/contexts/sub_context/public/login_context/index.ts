import { createContext, useContext } from "react";

type TLoginPageContext = {
  isMobile: boolean;
  navigate: Function;
};

const LoginPageContext = createContext<TLoginPageContext>({
  isMobile: false,
  navigate: () => {},
});

export default LoginPageContext;
export const useLoginPageContext = () => useContext(LoginPageContext);
