import { createContext, useContext } from "react";

type TPublicContextType = {};

const PublicContext = createContext<TPublicContextType>({});

export default PublicContext;
export const usePublicContext = () => useContext(PublicContext);
