import { createContext, useContext } from "react";

type TPublicContextType = {
  data: string;
};

const PublicContext = createContext<TPublicContextType>({
  data: "data",
});

export default PublicContext;
export const usePublicContext = () => useContext(PublicContext);