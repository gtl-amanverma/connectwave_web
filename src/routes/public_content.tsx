import { Navigate, Outlet } from "react-router-dom";
import { authMiddleware } from "../middlewares/user_auth";

const PublicRoute = () => {
  const { authToken, deviceToken, lang } = authMiddleware();
  return authToken ? (
    <Navigate
      replace
      to={`/auth/dashboard?lang=${lang}token=${deviceToken}`}
    />
  ) : (
    <Outlet />
  );
};

export default PublicRoute;
