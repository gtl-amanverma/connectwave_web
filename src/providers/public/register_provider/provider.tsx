import React, { useState } from "react";
import RegisterPage from "../../../pages/public/register_page/page";
import RegistrationPageContext from "../../../contexts/sub_context/public/register_context";

const RegisterProvider = () => {
    const [data, setData] = useState<string>("");
  return (
    <RegistrationPageContext.Provider value={{data: data}}>
      <RegisterPage />
    </RegistrationPageContext.Provider>
  );
};

export default RegisterProvider;
