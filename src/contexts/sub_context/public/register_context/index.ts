import { createContext, useContext } from "react";

type TRegistrationPageContext = {
  data: string;
};

const RegistrationPageContext = createContext<TRegistrationPageContext>({
  data: "Data",
});

export default RegistrationPageContext;
export const useRegistrationPageContext = () =>
  useContext(RegistrationPageContext);
