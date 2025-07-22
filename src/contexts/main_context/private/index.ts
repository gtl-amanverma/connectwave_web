import { createContext, useContext } from "react";

type TPrivateContextType = {
  data: string;
};

const PrivateContext = createContext<TPrivateContextType>({
  data: "data",
});

export default PrivateContext;
export const usePrivateContext = () => useContext(PrivateContext);